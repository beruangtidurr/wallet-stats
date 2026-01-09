import Navbar from "@/app/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="flex">
          
          {/* Sidebar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-1 min-h-screen bg-[#0f0f0f]">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
