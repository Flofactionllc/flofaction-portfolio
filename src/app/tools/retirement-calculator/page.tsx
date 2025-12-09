'use client';

import { useState } from 'react';

export default function RetirementCalculator() {
  const [age, setAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(67);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [result, setResult] = useState<number | null>(null);

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - age;
    const monthlyRate = annualReturn / 100 / 12;
    const totalMonths = yearsToRetirement * 12;

    // Future value of current savings
    const fvCurrentSavings = currentSavings * Math.pow(1 + annualReturn / 100, yearsToRetirement);

    // Future value of monthly contributions
    const fvMonthlyContributions = monthlyContribution * 
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate));

    const totalRetirementFunds = fvCurrentSavings + fvMonthlyContributions;
    setResult(totalRetirementFunds);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-2">Retirement Calculator</h1>
          <p className="text-slate-300 mb-8">Plan your financial future with precision</p>

          <div className="space-y-6">
            {/* Age Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">Current Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Retirement Age</label>
                <input
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Savings Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">Current Savings ($)</label>
                <input
                  type="number"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Monthly Contribution ($)</label>
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Return Rate */}
            <div>
              <label className="block text-white font-semibold mb-2">Expected Annual Return (%)</label>
              <input
                type="number"
                step="0.5"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(parseFloat(e.target.value))}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateRetirement}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mt-8"
            >
              Calculate Retirement Funds
            </button>

            {/* Results */}
            {result !== null && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mt-8">
                <p className="text-slate-300 mb-2">Projected Retirement Savings at Age {retirementAge}:</p>
                <p className="text-4xl font-bold text-green-400">
                  ${result.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
