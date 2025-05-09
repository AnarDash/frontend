import Sidebar from "@/components/sidebar";
import LoanTable from "@/components/LoanTable";
import Chart from "@/components/Chart";
import TodayList from "@/components/TodayList";

export default function Profile() {
  return (
    <div className="min-h-screen flex">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="ml-64 flex-1 bg-white font-sans overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto text-black">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Бүх зээлийн жагсаалт</h1>
            <div className="text-sm text-black/80">2025.04.05 - 8:56 AM</div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-8">
           
                <LoanTable />
              
            
                <Chart />
              
            </div>
            
              <TodayList />
           
          </div>
        </div>
      </main>
    </div>
  );
}