'use client';

import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface ProjectionInput {
  initialRevenue: number;
  revenueGrowthRate: number;
  cogs: number;
  operatingExpenses: number;
  taxRate: number;
  projectionYears: number;
}

interface YearProjection {
  year: number;
  revenue: number;
  cogs: number;
  grossProfit: number;
  operatingExpenses: number;
  ebitda: number;
  taxes: number;
  netIncome: number;
  netMargin: number;
}

export default function BusinessProjector() {
  const [inputs, setInputs] = useState<ProjectionInput>({
    initialRevenue: 100000,
    revenueGrowthRate: 20,
    cogs: 40,
    operatingExpenses: 30000,
    taxRate: 25,
    projectionYears: 5,
  });

  const [projections, setProjections] = useState<YearProjection[]>([]);
  const [showProjections, setShowProjections] = useState(false);

  const generateProjections = () => {
    const years: YearProjection[] = [];
    let currentRevenue = inputs.initialRevenue;
    
    for (let year = 1; year <= inputs.projectionYears; year++) {
      const revenue = currentRevenue;
      const cogsAmount = revenue * (inputs.cogs / 100);
      const grossProfit = revenue - cogsAmount;
      const ebitda = grossProfit - inputs.operatingExpenses;
      const taxes = Math.max(0, ebitda * (inputs.taxRate / 100));
      const netIncome = ebitda - taxes;
      const netMargin = (netIncome / revenue) * 100;
      
      years.push({
        year,
        revenue,
        cogs: cogsAmount,
        grossProfit,
        operatingExpenses: inputs.operatingExpenses,
        ebitda,
        taxes,
        netIncome,
        netMargin,
      });
      
      currentRevenue = revenue * (1 + inputs.revenueGrowthRate / 100);
    }
    
    setProjections(years);
    setShowProjections(true);
  };

  const handleInputChange = (field: keyof ProjectionInput, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? parseFloat(value) : value,
    }));
    setShowProjections(false);
  };

  const totalProjectedRevenue = projections.reduce((sum, p) => sum + p.revenue, 0);
  const totalProjectedNetIncome = projections.reduce((sum, p) => sum + p.netIncome, 0);
  const averageNetMargin = projections.length > 0 ? projections.reduce((sum, p) => sum + p.netMargin, 0) / projections.length : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-white">Business Projector</h1>
          </div>

          <p className="text-slate-300 mb-8">Project your business revenue, expenses, and profitability over multiple years</p>

          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            {/* Input Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Year 1 Revenue ($)</label>
                <input
                  type="number"
                  value={inputs.initialRevenue}
                  onChange={(e) => handleInputChange('initialRevenue', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Annual Growth Rate (%)</label>
                <input
                  type="number"
                  value={inputs.revenueGrowthRate}
                  onChange={(e) => handleInputChange('revenueGrowthRate', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">COGS (% of Revenue)</label>
                <input
                  type="number"
                  value={inputs.cogs}
                  onChange={(e) => handleInputChange('cogs', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Operating Expenses ($)</label>
                <input
                  type="number"
                  value={inputs.operatingExpenses}
                  onChange={(e) => handleInputChange('operatingExpenses', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Tax Rate (%)</label>
                <input
                  type="number"
                  value={inputs.taxRate}
                  onChange={(e) => handleInputChange('taxRate', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Projection Years</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={inputs.projectionYears}
                  onChange={(e) => handleInputChange('projectionYears', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                onClick={generateProjections}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 mt-4"
              >
                Generate Projections
              </button>
            </div>

            {/* Summary Section */}
            <div className="lg:col-span-3">
              {showProjections && projections.length > 0 ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">Total Projected Revenue</p>
                      <p className="text-2xl font-bold text-blue-400">${totalProjectedRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">Total Net Income</p>
                      <p className="text-2xl font-bold text-green-400">${totalProjectedNetIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-xl p-4">
                      <p className="text-slate-400 text-sm mb-2">Avg Net Margin</p>
                      <p className="text-2xl font-bold text-purple-400">{averageNetMargin.toFixed(1)}%</p>
                    </div>
                  </div>

                  <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-6 overflow-x-auto">
                    <h2 className="text-lg font-bold text-white mb-4">Year-by-Year Breakdown</h2>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-slate-600">
                          <th className="text-left py-3 px-4 text-slate-400">Year</th>
                          <th className="text-right py-3 px-4 text-slate-400">Revenue</th>
                          <th className="text-right py-3 px-4 text-slate-400">COGS</th>
                          <th className="text-right py-3 px-4 text-slate-400">Gross Profit</th>
                          <th className="text-right py-3 px-4 text-slate-400">OpEx</th>
                          <th className="text-right py-3 px-4 text-slate-400">EBITDA</th>
                          <th className="text-right py-3 px-4 text-slate-400">Taxes</th>
                          <th className="text-right py-3 px-4 text-slate-400">Net Income</th>
                          <th className="text-right py-3 px-4 text-slate-400">Margin %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projections.map((proj) => (
                          <tr key={proj.year} className="border-b border-slate-700 hover:bg-slate-600/20">
                            <td className="py-3 px-4 text-white font-semibold">Year {proj.year}</td>
                            <td className="text-right py-3 px-4 text-green-400">${proj.revenue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                            <td className="text-right py-3 px-4 text-red-400">${proj.cogs.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                            <td className="text-right py-3 px-4 text-blue-400">${proj.grossProfit.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                            <td className="text-right py-3 px-4 text-orange-400">${proj.operatingExpenses.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                            <td className="text-right py-3 px-4 text-yellow-400">${proj.ebitda.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                            <td className="text-right py-3 px-4 text-red-400">${proj.taxes.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                            <td className="text-right py-3 px-4 text-green-400 font-semibold">${proj.netIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                            <td className="text-right py-3 px-4 text-purple-400 font-semibold">{proj.netMargin.toFixed(1)}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-8 flex items-center justify-center h-96">
                  <p className="text-slate-400 text-center">Enter your business parameters and click "Generate Projections" to see financial forecasts</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
