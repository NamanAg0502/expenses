import FetchData from '@/components/FetchData';
import Navbar from '../components/Navbar';

const AppLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
