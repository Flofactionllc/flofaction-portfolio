'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, getDocs, where } from 'firebase/firestore';

interface DashboardMetrics {
  totalClients: number;
  totalRevenue: number;
  activeProjects: number;
  completionRate: number;
  clientSatisfaction: number;
  monthlyGrowth: number;
}

interface ClientData {
  id: string;
  name: string;
  service: string;
  status: 'active' | 'completed' | 'pending';
  revenue: number;
  date: string;
}

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalClients: 0,
    totalRevenue: 0,
    activeProjects: 0,
    completionRate: 0,
    clientSatisfaction: 0,
    monthlyGrowth: 0,
  });
  const [clients, setClients] = useState<ClientData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsRef = collection(db, 'clients');
        const clientsSnapshot = await getDocs(clientsRef);
        const clientData: ClientData[] = [];
        let totalRev = 0;
        let activeCount = 0;

        clientsSnapshot.forEach((doc) => {
          const data = doc.data() as any;
          clientData.push({
            id: doc.id,
            name: data.name,
            service: data.service,
            status: data.status,
            revenue: data.revenue,
            date: data.date,
          });
          totalRev += data.revenue;
          if (data.status === 'active') activeCount++;
        });

        setClients(clientData);
        setMetrics((prev) => ({
          ...prev,
          totalClients: clientData.length,
          totalRevenue: totalRev,
          activeProjects: activeCount,
          completionRate: clientData.length > 0 ? (clientData.filter(c => c.status === 'completed').length / clientData.length) * 100 : 0,
        }));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading dashboard...</div>;

  return (
    <div className="admin-dashboard p-8 bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <MetricCard label="Total Clients" value={metrics.totalClients} color="blue" />
        <MetricCard label="Revenue" value={`$${(metrics.totalRevenue / 1000).toFixed(1)}K`} color="green" />
        <MetricCard label="Active Projects" value={metrics.activeProjects} color="purple" />
        <MetricCard label="Completion Rate" value={`${metrics.completionRate.toFixed(1)}%`} color="amber" />
        <MetricCard label="Client Satisfaction" value={`${metrics.clientSatisfaction}%`} color="pink" />
        <MetricCard label="Monthly Growth" value={`${metrics.monthlyGrowth}%`} color="cyan" />
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Clients</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4">Client Name</th>
                <th className="text-left py-3 px-4">Service</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Revenue</th>
                <th className="text-left py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {clients.slice(0, 10).map((client) => (
                <tr key={client.id} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-3 px-4">{client.name}</td>
                  <td className="py-3 px-4">{client.service}</td>
                  <td className="py-3 px-4"><StatusBadge status={client.status} /></td>
                  <td className="py-3 px-4">${client.revenue}</td>
                  <td className="py-3 px-4">{client.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string | number;
  color: string;
}

function MetricCard({ label, value, color }: MetricCardProps) {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-600 to-blue-800',
    green: 'from-green-600 to-green-800',
    purple: 'from-purple-600 to-purple-800',
    amber: 'from-amber-600 to-amber-800',
    pink: 'from-pink-600 to-pink-800',
    cyan: 'from-cyan-600 to-cyan-800',
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} rounded-lg p-6 text-white shadow-lg`}>
      <p className="text-sm font-semibold opacity-90">{label}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

interface StatusBadgeProps {
  status: 'active' | 'completed' | 'pending';
}

function StatusBadge({ status }: StatusBadgeProps) {
  const statusColors: Record<string, string> = {
    active: 'bg-green-600 text-white',
    completed: 'bg-blue-600 text-white',
    pending: 'bg-yellow-600 text-white',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
