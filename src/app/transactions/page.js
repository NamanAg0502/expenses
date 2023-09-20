import Sidebar from '@/components/Sidebar';
import AppLayout from '@/pages/AppLayout';

const Transactions = () => {
  return (
    <div className="flex justify-between items-start min-h-screen w-full">
      <div className="">
        <Sidebar />
      </div>
      <main className="w-5/6 text-black bg-neutral-50 min-h-screen">
        <AppLayout />
      </main>
    </div>
  );
};

export default Transactions;
