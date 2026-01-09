"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wallet, ArrowLeftRight, FileText, Bell, HelpCircle, Settings } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const mainMenuItems = [
    { icon: <Wallet size={20} />, label: "Dashboard", href: "/dashboard" },
    { icon: <Wallet size={20} />, label: "Wallets", href: "/wallets" },
    { icon: <ArrowLeftRight size={20} />, label: "Convert", href: "/convert" },
    { icon: <FileText size={20} />, label: "History", href: "/history" },
    { icon: <Bell size={20} />, label: "Notification", href: "/notifications" },
  ];

  const otherMenuItems = [
    { icon: <HelpCircle size={20} />, label: "Support", href: "/support" },
    { icon: <Settings size={20} />, label: "Settings", href: "/settings" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col p-6">
      
      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-2 mb-12">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
          <Wallet className="text-white" size={24} />
        </div>
        <span className="text-xl font-bold">Cashdeck</span>
      </Link>

      {/* Main Menu */}
      <div className="flex-1">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">Main</div>
        <nav className="space-y-1">
          {mainMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive(item.href)
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Others */}
      <div className="mt-auto">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">Others</div>
        <nav className="space-y-1">
          {otherMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive(item.href)
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
