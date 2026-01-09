export default function WalletsPage() {
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
        <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg font-medium">
          + Add Wallet
        </button>
      </div>

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { name: "Main Wallet", balance: "$24,320", currency: "USD" },
          { name: "Savings", balance: "$88,000", currency: "USD" },
          { name: "Crypto", balance: "$12,430", currency: "USDT" },
        ].map((wallet) => (
          <div
            key={wallet.name}
            className="bg-[#18181b] rounded-xl p-6 border border-white/5 hover:border-orange-500/40 transition cursor-pointer"
          >
            <p className="text-gray-400 text-sm">{wallet.name}</p>
            <p className="text-2xl font-semibold mt-2">{wallet.balance}</p>
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
            {[
              { name: "Main Wallet", currency: "USD", balance: "$24,320", status: "Active" },
              { name: "Savings", currency: "USD", balance: "$88,000", status: "Active" },
              { name: "Crypto", currency: "USDT", balance: "$12,430", status: "Active" },
              { name: "Old Wallet", currency: "EUR", balance: "$1,200", status: "Inactive" },
            ].map((wallet) => (
              <tr
                key={wallet.name}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4 font-medium">{wallet.name}</td>
                <td className="px-6 py-4 text-gray-400">{wallet.currency}</td>
                <td className="px-6 py-4">{wallet.balance}</td>
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

    </div>
  );
}
