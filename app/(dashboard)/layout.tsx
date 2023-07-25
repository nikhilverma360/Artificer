import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Press_Start_2P } from 'next/font/google'
import { cn } from "@/lib/utils";

const font = Press_Start_2P ({ weight: '400', subsets: ['latin'] });

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("h-full relative text-white bg-black", font.className)}>
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 ">
        <Sidebar />
        </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
