'use client';

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface DisabilityInput {
  currentAge: number;
  retirementAge: number;
  currentIncome: number;
  benefitReplacement: number;
  inflationRate: number;
  investmentReturn: number;
}

interface DisabilityResult {
  monthlyBenefit: number;
  annualBenefit: number;
  totalBenefitTillRetirement: number;
  futureValueNeeded: number;
  recommendedInsurance: number;
}

export default function DisabilityCalculator() {
  const [inputs, setInputs] = useState<DisabilityInput>({
    currentAge: 35,
    retirementAge: 67,
    currentIncome: 75000,
    benefitReplacement: 60,
    inflationRate: 3,
    investmentReturn: 6,
  });

  const [results, setResults] = useState<DisabilityResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateDisabilityInsurance = () => {
    const yearsToRetirement = inputs.retirementAge - inputs.currentAge;
    const monthlyIncome = inputs.currentIncome / 12;
    const monthlyBenefit = (monthlyIncome * inputs.benefitReplacement) / 100;
    const annualBenefit = monthlyBenefit * 12;

    // Calculate future value with inflation
    const inflationFactor = Math.pow(1 + inputs.inflationRate / 100, yearsToRetirement);
    const futureAnnualBenefit = annualBenefit * inflationFactor;
    const futureMonthlyBenefit = futureAnnualBenefit / 12;

    // Present value of annuity for disability benefits
    const monthlyRate = inputs.investmentReturn / 100 / 12;
    const numPayments = yearsToRetirement * 12;
    const pvFactor = (1 - Math.pow(1 + monthlyRate, -numPayments)) / monthlyRate;
    const totalBenefitNeeded = monthlyBenefit * pvFactor;

    // Total benefit till retirement including inflation adjustment
    const totalBenefit = annualBenefit * yearsToRetirement * (1 + (inputs.inflationRate / 100 + inputs.investmentReturn / 100) / 2);

    // Recommended insurance coverage (with some safety margin)
    const recommendedCoverage = totalBenefitNeeded * 1.1;

    setResults({
      monthlyBenefit: monthlyBenefit,
      annualBenefit: annualBenefit,
      totalBenefitTillRetirement: totalBenefit,
      futureValueNeeded: totalBenefitNeeded,
      recommendedInsurance: recommendedCoverage,
    });
    setShowResults(true);
  };

  const handleInputChange = (field: keyof DisabilityInput, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value,
    }));
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Disability Income Calculator</h1>
          </div>

          <p className="text-slate-300 mb-8">Calculate how much disability insurance coverage you need to protect your income</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Current Age</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="18"
                    max="65"
                    value={inputs.currentAge}
                    onChange={(e) => handleInputChange('currentAge', parseInt(e.target.value))}
                    className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white font-semibold min-w-12 text-right">{inputs.currentAge}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Retirement Age</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="55"
                    max="75"
                    value={inputs.retirementAge}
                    onChange={(e) => handleInputChange('retirementAge', parseInt(e.target.value))}
                    className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white font-semibold min-w-12 text-right">{inputs.retirementAge}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Annual Income</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="20000"
                    max="500000"
                    step="5000"
                    value={inputs.currentIncome}
                    onChange={(e) => handleInputChange('currentIncome', parseInt(e.target.value))}
                    className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white font-semibold min-w-32 text-right">${inputs.currentIncome.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Benefit Replacement (%)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="40"
                    max="80"
                    value={inputs.benefitReplacement}
                    onChange={(e) => handleInputChange('benefitReplacement', parseInt(e.target.value))}
                    className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white font-semibold min-w-12 text-right">{inputs.benefitReplacement}%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Annual Inflation Rate (%)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="8"
                    step="0.1"
                    value={inputs.inflationRate}
                    onChange={(e) => handleInputChange('inflationRate', parseFloat(e.target.value))}
                    className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white font-semibold min-w-12 text-right">{inputs.inflationRate.toFixed(1)}%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Investment Return (%)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="0.1"
                    value={inputs.investmentReturn}
                    onChange={(e) => handleInputChange('investmentReturn', parseFloat(e.target.value))}
                    className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-white font-semibold min-w-12 text-right">{inputs.investmentReturn.toFixed(1)}%</span>
                </div>
              </div>

              <button
                onClick={calculateDisabilityInsurance}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 mt-4"
              >
                Calculate Insurance Need
              </button>
            </div>

            {/* Results Section */}
            <div>
              {showResults && results ? (
                <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-700/50 rounded-xl p-6 space-y-4">
                  <h2 className="text-xl font-bold text-blue-300 mb-6">Insurance Recommendation</h2>

                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">Monthly Benefit</p>
                    <p className="text-2xl font-bold text-blue-400">${results.monthlyBenefit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">Annual Benefit</p>
                    <p className="text-2xl font-bold text-blue-400">${results.annualBenefit.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">Total Benefit Till Retirement</p>
                    <p className="text-2xl font-bold text-indigo-400">${results.totalBenefitTillRetirement.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-4 mt-6">
                    <p className="text-slate-400 text-sm mb-2">Recommended Coverage</p>
                    <p className="text-3xl font-bold text-green-400">${results.recommendedInsurance.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    <p className="text-xs text-slate-400 mt-2">Based on your income, age, and inflation projections</p>
                  </div>

                  <div className="bg-slate-700/50 rounded-lg p-4 mt-4">
                    <p className="text-slate-300 text-xs leading-relaxed">
                      This calculator estimates the disability insurance coverage needed to replace {inputs.benefitReplacement}% of your income until retirement at age {inputs.retirementAge}.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-8 flex items-center justify-center h-full min-h-96">
                  <p className="text-slate-400 text-center">Enter your information and click "Calculate" to see your recommended disability insurance coverage</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
