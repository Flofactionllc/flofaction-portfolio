'use client';

import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

interface TaxInput {
  income: number;
  filingStatus: string;
  dependents: number;
  capitalGains: number;
  qualifiedDividends: number;
  deductions: number;
}

interface TaxResult {
  grossIncome: number;
  taxableIncome: number;
  federalTax: number;
  stateTax: number;
  socialSecurity: number;
  medicare: number;
  totalTax: number;
  effectiveRate: number;
  netIncome: number;
}

const TAX_BRACKETS_2024 = {
  single: [
    { limit: 11600, rate: 0.10 },
    { limit: 47150, rate: 0.12 },
    { limit: 100525, rate: 0.22 },
    { limit: 191950, rate: 0.24 },
    { limit: 243725, rate: 0.32 },
    { limit: 609350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
  married: [
    { limit: 23200, rate: 0.10 },
    { limit: 94300, rate: 0.12 },
    { limit: 201050, rate: 0.22 },
    { limit: 383900, rate: 0.24 },
    { limit: 487450, rate: 0.32 },
    { limit: 731200, rate: 0.35 },
    { limit: Infinity, rate: 0.37 },
  ],
};

export default function TaxCalculator() {
  const [inputs, setInputs] = useState<TaxInput>({
    income: 75000,
    filingStatus: 'single',
    dependents: 0,
    capitalGains: 0,
    qualifiedDividends: 0,
    deductions: 13850,
  });

  const [results, setResults] = useState<TaxResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateTax = () => {
    const brackets = TAX_BRACKETS_2024[inputs.filingStatus as keyof typeof TAX_BRACKETS_2024] || TAX_BRACKETS_2024.single;
    const standardDeduction = inputs.filingStatus === 'married' ? 27700 : 13850;
    const deduction = inputs.deductions || standardDeduction;
    
    const grossIncome = inputs.income + inputs.capitalGains + inputs.qualifiedDividends;
    const taxableIncome = Math.max(0, grossIncome - deduction);
    
    // Calculate federal income tax
    let federalTax = 0;
    let previousLimit = 0;
    
    for (const bracket of brackets) {
      if (taxableIncome <= previousLimit) break;
      
      const incomeInBracket = Math.min(taxableIncome, bracket.limit) - previousLimit;
      federalTax += incomeInBracket * bracket.rate;
      previousLimit = bracket.limit;
    }
    
    // Calculate self-employment and payroll taxes
    const socialSecurity = Math.min(inputs.income * 0.124, 168600 * 0.124);
    const medicare = inputs.income * 0.029;
    
    // Estimate state tax (approximate)
    const stateTax = grossIncome * 0.05;
    
    const totalTax = federalTax + socialSecurity + medicare + stateTax;
    const effectiveRate = (totalTax / grossIncome) * 100;
    const netIncome = grossIncome - totalTax;
    
    setResults({
      grossIncome,
      taxableIncome,
      federalTax,
      stateTax,
      socialSecurity,
      medicare,
      totalTax,
      effectiveRate,
      netIncome,
    });
    setShowResults(true);
  };

  const handleInputChange = (field: keyof TaxInput, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value,
    }));
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-white">Federal Tax Calculator 2024</h1>
          </div>

          <p className="text-slate-300 mb-8">Calculate your estimated federal income tax and payroll taxes</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Input Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Annual Income ($)</label>
                <input
                  type="number"
                  value={inputs.income}
                  onChange={(e) => handleInputChange('income', parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Filing Status</label>
                <select
                  value={inputs.filingStatus}
                  onChange={(e) => handleInputChange('filingStatus', e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="single">Single</option>
                  <option value="married">Married Filing Jointly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Number of Dependents</label>
                <input
                  type="number"
                  min="0"
                  value={inputs.dependents}
                  onChange={(e) => handleInputChange('dependents', parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Capital Gains ($)</label>
                <input
                  type="number"
                  value={inputs.capitalGains}
                  onChange={(e) => handleInputChange('capitalGains', parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Qualified Dividends ($)</label>
                <input
                  type="number"
                  value={inputs.qualifiedDividends}
                  onChange={(e) => handleInputChange('qualifiedDividends', parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">Itemized Deductions ($)</label>
                <input
                  type="number"
                  value={inputs.deductions}
                  onChange={(e) => handleInputChange('deductions', parseFloat(e.target.value))}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                onClick={calculateTax}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 mt-4"
              >
                Calculate Taxes
              </button>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2">
              {showResults && results ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-green-300 mb-6">Tax Summary</h2>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <p className="text-slate-400 text-sm mb-1">Gross Income</p>
                        <p className="text-xl font-bold text-green-400">${results.grossIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                      </div>

                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <p className="text-slate-400 text-sm mb-1">Taxable Income</p>
                        <p className="text-xl font-bold text-blue-400">${results.taxableIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                      </div>

                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <p className="text-slate-400 text-sm mb-1">Federal Tax</p>
                        <p className="text-xl font-bold text-red-400">${results.federalTax.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                      </div>

                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <p className="text-slate-400 text-sm mb-1">State Tax</p>
                        <p className="text-xl font-bold text-red-400">${results.stateTax.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                      </div>

                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <p className="text-slate-400 text-sm mb-1">Social Security</p>
                        <p className="text-xl font-bold text-yellow-400">${results.socialSecurity.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                      </div>

                      <div className="bg-slate-700/50 rounded-lg p-4">
                        <p className="text-slate-400 text-sm mb-1">Medicare</p>
                        <p className="text-xl font-bold text-yellow-400">${results.medicare.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-700/50 rounded-lg p-4 mb-4">
                      <p className="text-slate-400 text-sm mb-2">Total Tax Burden</p>
                      <p className="text-3xl font-bold text-red-400">${results.totalTax.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                      <p className="text-xs text-slate-400 mt-2">Effective Tax Rate: {results.effectiveRate.toFixed(2)}%</p>
                    </div>

                    <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-4">
                      <p className="text-slate-400 text-sm mb-2">Net Income (After Tax)</p>
                      <p className="text-3xl font-bold text-green-400">${results.netIncome.toLocaleString('en-US', { maximumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-8 flex items-center justify-center h-96">
                  <p className="text-slate-400 text-center">Enter your income information and click "Calculate Taxes" to see your estimated tax liability</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
