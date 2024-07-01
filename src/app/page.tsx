import Link from 'next/link';
import { MdOutlineMoreVert } from 'react-icons/md';

export default function Home() {
  const renderTableRow = () => {
    return (
      <Link href='/feature/1'>
        <div className='grid grid-cols-4 gap-4 items-center bg-[#f1f1f1] p-2 text-[#000] mt-2 hover:bg-[#e1e1e1] cursor-pointer transition-colors hover:outline hover:outline-[#000]'>
          <div className='text-center'>Tooltip</div>
          <div className='text-center'>Optimization</div>
          <div className='text-center'>0/0</div>
          <div className='flex justify-center items-center'>
            <MdOutlineMoreVert className='text-2xl cursor-pointer' />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm '>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Features</h1>

          <div className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer'>
            Add New Feature
          </div>
        </div>
        {/* Table */}
        <div className='flex flex-col'>
          {/* Table Heading */}
          <div className='grid grid-cols-4 gap-4 items-center bg-black p-2 text-[#f1f1f1] mt-2'>
            <div className='text-center'>Feature</div>
            <div className='text-center'>Team</div>
            <div className='text-center'>Status</div>
            <div className='text-center'>Actions</div>
          </div>

          {/* Table Rows */}
          {renderTableRow()}
          {renderTableRow()}
          {renderTableRow()}
          {renderTableRow()}
          {renderTableRow()}
          {renderTableRow()}
          {renderTableRow()}
          {renderTableRow()}
          {renderTableRow()}
        </div>
      </div>
    </main>
  );
}
