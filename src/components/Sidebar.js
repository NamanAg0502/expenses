import { sidebar } from '@/constants/data';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <header className="w-1/6 bg-neutral-900 fixed top-0 left-0 text-white h-screen p-5">
      <div className="flex flex-col justify-start gap-10 w-full">
        <h1 className="px-4 font-medium">Expense</h1>
        <ul className="flex flex-col items-start justify-between gap-4 w-full">
          {sidebar.map((item) => (
            <Link href={item.link} key={item.id} className="w-full">
              <li className="hover:bg-neutral-600 w-full py-2 px-4 text-lg rounded-md">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Sidebar;
