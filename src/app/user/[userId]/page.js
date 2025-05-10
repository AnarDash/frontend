// frontend/src/app/user/[userId]/page.js
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/sidebar';
import LoanTable from '@/components/Loantable';
import Chart from '@/components/Chart';
import TodayList from '@/components/TodayList';
import LoanForm from '@/components/LoanForm';
import { getUserLoans } from '@/services/api';

export default function Profile() {
  const [loans, setLoans] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const { userId } = useParams();
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
      setCurrentTime(now.toLocaleTimeString());

      const intervalId = setInterval(() => {
        const now = new Date();
        setCurrentDate(now.toLocaleDateString());
        setCurrentTime(now.toLocaleTimeString());
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isClient]);

  useEffect(() => {
    if (userId) {
      fetchProfileData(userId);
    }
  }, [userId]);

  const fetchProfileData = async (currentUserId) => {
    try {
      const userData = { _id: currentUserId, name: 'Insecure User' };
      setUser(userData);
      const loanData = await getUserLoans(currentUserId);
      setLoans(loanData);
    } catch (err) {
      setError(err.message);
      setUser(null);
      setLoans([]);
    }
  };

  if (!userId) {
    return <div>Loading profile...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  const totalLoans = loans.length;
  const paidLoans = loans.filter(loan => loan.isPaid).length;
  const unpaidLoans = totalLoans - paidLoans;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-md">
        <Sidebar />
        <div className="absolute left-0 top-20 h-12 w-1 bg-purple-500"></div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <header className="mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Хайх"
              className="w-1/3 px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
            />
            <div className="bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700">
              <span>{isClient ? currentDate : ''}</span> - <span>{isClient ? currentTime : ''}</span>
            </div>
          </header>

          {/* Main Content Area */}
          <section className="flex flex-col lg:flex-row gap-6">
            {/* Left Section (Loan Table and Chart) */}
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <LoanTable loans={loans} />
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <Chart total={totalLoans} paid={paidLoans} unpaid={unpaidLoans} />
              </div>
            </div>

            {/* Right Aside (Today's List and Loan Form) */}
            <aside className="w-full lg:w-96 space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <TodayList />
              </div>
              <div
                className="bg-white rounded-lg shadow-sm p-6"
                style={{ backgroundImage: 'linear-gradient(to bottom right, #f3e8ff, #d5bbf9)' }}
              >
                <LoanForm
                  user={user}
                  onLoanAdded={() => {
                    if (userId) {
                      fetchProfileData(userId);
                    }
                  }}
                />
              </div>
            </aside>
          </section>
        </div>
      </main>
    </div>
  );
}