import AppLayout from '@/pages/AppLayout';
import Sidebar from '@/components/Sidebar';
import FetchData from '@/components/FetchData';

const Home = () => {
  return (
    <div className="flex justify-between items-start min-h-screen w-full">
      <div className="">
        <Sidebar />
      </div>
      <main className="w-5/6 text-black bg-neutral-50 min-h-screen">
        <AppLayout>
          <FetchData />
        </AppLayout>
      </main>
    </div>
  );
};

export default Home;
