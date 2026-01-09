export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-8">
      
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-1">
            Welcome back — here’s your financial overview
          </p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg font-medium">
          + Add Wallet
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Balance", value: "$124,320" },
          { label: "Monthly Income", value: "$8,420" },
          { label: "Monthly Spending", value: "$3,280" },
          { label: "Active Wallets", value: "5" },
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
            Chart goes here
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-[#18181b] rounded-xl p-6 border border-white/5">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>

          <div className="space-y-4">
            {[
              { name: "Spotify", amount: "-$12.99" },
              { name: "Apple Store", amount: "-$199.00" },
              { name: "Salary", amount: "+$4,500.00" },
              { name: "Netflix", amount: "-$15.99" },
            ].map((tx, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{tx.name}</p>
                  <p className="text-sm text-gray-500">Today</p>
                </div>
                <p
                  className={`font-medium ${
                    tx.amount.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {tx.amount}
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
          {["Main Wallet", "Savings", "Crypto"].map((wallet) => (
            <div
              key={wallet}
              className="bg-[#18181b] rounded-xl p-6 border border-white/5 hover:border-orange-500/40 transition"
            >
              <p className="text-gray-400 text-sm">{wallet}</p>
              <p className="text-xl font-semibold mt-2">$12,430</p>
              <p className="text-sm text-gray-500 mt-1">USD Balance</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
