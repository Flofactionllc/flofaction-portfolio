'use client';

import { useState } from 'react';

export default function ACAMedicareCalculator() {
  const [age, setAge] = useState(55);
  const [income, setIncome] = useState(60000);
  const [householdSize, setHouseholdSize] = useState(1);
  const [employerCoverage, setEmployerCoverage] = useState(false);
  const [result, setResult] = useState<{subsidies: number, oop: number} | null>(null);

  const calculateSubsidies = () => {
    // Federal Poverty Level 2024 for household size 1: $15,060
    const fplMultipliers = [15060, 20440, 27750, 35030, 42300, 50570, 58840, 67110];
    const fpl = householdSize <= 8 ? fplMultipliers[householdSize - 1] : fplMultipliers[7] + (householdSize - 8) * 8270;
    
    // Income as % of FPL
    const incomePercent = (income / fpl) * 100;
    
    // Calculate subsidy amount (simplified)
    let subsidyPercent = 0;
    if (incomePercent <= 150) subsidyPercent = 8.5;
    else if (incomePercent <= 200) subsidyPercent = 8.5 + (incomePercent - 150) * 0.02;
    else if (incomePercent <= 250) subsidyPercent = 9.5 + (incomePercent - 200) * 0.015;
    else if (incomePercent <= 300) subsidyPercent = 10.25;
    else if (incomePercent <= 400) subsidyPercent = 10.25;
    
    const premiumContribution = (income * subsidyPercent) / 100;
    const estimatedPremium = 450 + (age - 21) * 15; // Average estimate
    const estimatedSubsidy = Math.max(0, estimatedPremium - premiumContribution);
    
    // Out of pocket max (2024)
    const oopMax = age >= 65 ? 0 : householdSize === 1 ? 9900 : 19800;
    
    setResult({
      subsidies: estimatedSubsidy,
      oop: oopMax
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-2">ACA & Medicare Calculator</h1>
          <p className="text-slate-300 mb-8">Estimate your subsidies and out-of-pocket costs</p>

          <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Annual Income ($)</label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Household Size */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-semibold mb-2">Household Size</label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={householdSize}
                  onChange={(e) => setHouseholdSize(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2 mt-4">Employer Coverage?</label>
                <input
                  type="checkbox"
                  checked={employerCoverage}
                  onChange={(e) => setEmployerCoverage(e.target.checked)}
                  className="w-5 h-5 mt-2"
                />
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateSubsidies}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 mt-8"
            >
              Calculate Subsidies
            </button>

            {/* Results */}
            {result !== null && (
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                  <p className="text-slate-300 text-sm mb-2">Est. Monthly Subsidy</p>
                  <p className="text-3xl font-bold text-green-400">
                    ${(result.subsidies / 12).toFixed(0)}
                  </p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                  <p className="text-slate-300 text-sm mb-2">Annual OOP Max</p>
                  <p className="text-3xl font-bold text-orange-400">
                    ${result.oop.toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
