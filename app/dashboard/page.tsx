"use client";

import { useState, useMemo } from "react";

export default function DashboardPage() {
  const [wallets, setWallets] = useState([
    { name: "Main Wallet", balance: 24320, currency: "USD" },
    { name: "Savings", balance: 88000, currency: "USD" },
    { name: "Crypto", balance: 12430, currency: "USDT" },
  ]);

  const [transactions] = useState([
    { name: "Spotify", amount: -12.99 },
    { name: "Apple Store", amount: -199 },
    { name: "Salary", amount: 4500 },
    { name: "Netflix", amount: -15.99 },
  ]);

  const totalBalance = useMemo(
    () => wallets.reduce((sum, w) => sum + w.balance, 0),
    [wallets]
  );

  const monthlyIncome = useMemo(
    () => transactions.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0),
    [transactions]
  );

  const monthlySpending = useMemo(
    () => transactions.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0),
    [transactions]
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-1">
            Welcome back — here’s your financial overview
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Balance", value: `$${totalBalance.toLocaleString()}` },
          { label: "Monthly Income", value: `$${monthlyIncome.toLocaleString()}` },
          { label: "Monthly Spending", value: `$${monthlySpending.toLocaleString()}` },
          { label: "Active Wallets", value: wallets.length },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-[#18181b] rounded-xl p-6 border border-white/5"
          >
            <p className="text-gray-400 text-sm">{stat.label}</p>
            <p className="text-2xl font-semibold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Balance Overview */}
        <div className="lg:col-span-2 bg-[#18181b] rounded-xl p-6 border border-white/5">
          <h2 className="text-lg font-semibold mb-4">Balance Overview</h2>

          <div className="h-64 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg flex items-center justify-center text-gray-500">
            Total balance: ${totalBalance.toLocaleString()}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-[#18181b] rounded-xl p-6 border border-white/5">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>

          <div className="space-y-4">
            {transactions.map((tx, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{tx.name}</p>
                  <p className="text-sm text-gray-500">Today</p>
                </div>
                <p
                  className={`font-medium ${
                    tx.amount > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wallets */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Your Wallets</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="bg-[#18181b] rounded-xl p-6 border border-white/5 hover:border-orange-500/40 transition"
            >
              <p className="text-gray-400 text-sm">{wallet.name}</p>
              <p className="text-xl font-semibold mt-2">
                ${wallet.balance.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">{wallet.currency}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
