import { formatDate } from '@/utils/utils';
import { IconCaretRight } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center gap-2 p-4">
        <h2 className="text-2xl font-medium">Hello Naman</h2>
        <span>
          <IconCaretRight />
        </span>
        <h2 className="font-normal border border-neutral-400 px-4 py-1 rounded-lg bg-neutral-300">
          {formatDate(Date.now())}
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
