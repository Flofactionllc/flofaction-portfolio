'use client';

import { useState } from 'react';

export default function LifeInsuranceCalculator() {
  const [age, setAge] = useState(35);
  const [income, setIncome] = useState(75000);
  const [dependents, setDependents] = useState(2);
  const [mortgage, setMortgage] = useState(300000);
  const [debts, setDebts] = useState(25000);
  const [savings, setSavings] = useState(50000);
  const [result, setResult] = useState<number | null>(null);

  const calculateInsurance = () => {
    // Human method: income replacement (8-10 years) + liabilities
    const incomeReplacement = income * 10;
    const familyExpenses = income * dependents * 1.5; // Years for family to adjust
    const educationFunds = dependents * 100000; // College funds
    const finalExpenses = 15000;
    const totalLiabilities = mortgage + debts - savings;
    
    const totalNeeded = incomeReplacement + educationFunds + finalExpenses + totalLiabilities - savings;
    setResult(Math.max(250000, totalNeeded)); // Minimum $250k
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-2">Life Insurance Needs Calculator</h1>
          <p className="text-slate-300 mb-8">Determine the right coverage amount for your family</p>

          <div className="space-y-6">
            {/* Income & Family Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">Annual Income ($)</label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Dependents (#)</label>
                <input
                  type="number"
                  min="0"
                  value={dependents}
                  onChange={(e) => setDependents(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Mortgage & Debts */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">Mortgage Balance ($)</label>
                <input
                  type="number"
                  value={mortgage}
                  onChange={(e) => setMortgage(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Other Debts ($)</label>
                <input
                  type="number"
                  value={debts}
                  onChange={(e) => setDebts(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Savings */}
            <div>
              <label className="block text-white font-semibold mb-2">Current Savings ($)</label>
              <input
                type="number"
                value={savings}
                onChange={(e) => setSavings(parseFloat(e.target.value))}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateInsurance}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mt-8"
            >
              Calculate Coverage Needed
            </button>

            {/* Results */}
            {result !== null && (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mt-8">
                <p className="text-slate-300 mb-2">Recommended Life Insurance Coverage:</p>
                <p className="text-4xl font-bold text-blue-400 mb-4">
                  ${result.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
                <p className="text-slate-400 text-sm">This amount ensures income replacement, debt coverage, education funding, and final expenses.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
