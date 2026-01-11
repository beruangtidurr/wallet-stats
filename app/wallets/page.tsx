"use client";

import { useState } from "react";

export default function WalletsPage() {
  const [wallets, setWallets] = useState([
    { name: "Main Wallet", currency: "USD", balance: 24320, status: "Active" },
    { name: "Savings", currency: "USD", balance: 88000, status: "Active" },
    { name: "Crypto", currency: "USDT", balance: 12430, status: "Active" },
    { name: "Old Wallet", currency: "EUR", balance: 1200, status: "Inactive" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newWallet, setNewWallet] = useState({
    name: "",
    currency: "USD",
    balance: "",
  });

  const addWallet = () => {
    if (!newWallet.name || !newWallet.balance) return;

    setWallets([
      ...wallets,
      {
        name: newWallet.name,
        currency: newWallet.currency,
        balance: Number(newWallet.balance),
        status: "Active",
      },
    ]);

    setNewWallet({ name: "", currency: "USD", balance: "" });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Wallets</h1>
          <p className="text-gray-400 mt-1">
            Manage all your accounts and balances
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg font-medium"
        >
          + Add Wallet
        </button>
      </div>

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {wallets.slice(0, 3).map((wallet) => (
          <div
            key={wallet.name}
            className="bg-[#18181b] rounded-xl p-6 border border-white/5 hover:border-orange-500/40 transition"
          >
            <p className="text-gray-400 text-sm">{wallet.name}</p>
            <p className="text-2xl font-semibold mt-2">
              ${wallet.balance.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">{wallet.currency}</p>
          </div>
        ))}
      </div>

      {/* Wallet Table */}
      <div className="bg-[#18181b] rounded-xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-lg font-semibold">Wallet Details</h2>
        </div>

        <table className="w-full">
          <thead className="bg-[#111] text-gray-400 text-sm">
            <tr>
              <th className="text-left px-6 py-3">Wallet</th>
              <th className="text-left px-6 py-3">Currency</th>
              <th className="text-left px-6 py-3">Balance</th>
              <th className="text-left px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((wallet) => (
              <tr
                key={wallet.name}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4 font-medium">{wallet.name}</td>
                <td className="px-6 py-4 text-gray-400">{wallet.currency}</td>
                <td className="px-6 py-4">
                  ${wallet.balance.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      wallet.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {wallet.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Wallet Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#18181b] p-6 rounded-xl w-[400px] border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Add Wallet</h3>

            <input
              placeholder="Wallet name"
              value={newWallet.name}
              onChange={(e) =>
                setNewWallet({ ...newWallet, name: e.target.value })
              }
              className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 mb-3"
            />

            <input
              placeholder="Balance"
              type="number"
              value={newWallet.balance}
              onChange={(e) =>
                setNewWallet({ ...newWallet, balance: e.target.value })
              }
              className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 mb-3"
            />

            <select
              value={newWallet.currency}
              onChange={(e) =>
                setNewWallet({ ...newWallet, currency: e.target.value })
              }
              className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-2 mb-4"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>USDT</option>
              <option>BTC</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={addWallet}
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
