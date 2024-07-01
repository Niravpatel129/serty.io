import { MdOutlineMoreVert } from 'react-icons/md';

export default function Home() {
  const renderTableRow = () => {
    return (
      <div className='flex justify-between items-center bg-[#f1f1f1] p-2 text-[#000] mt-2'>
        <div>Tooltip</div>
        <div>Optimization</div>
        <div>0/0</div>
        <div className='cursor-pointer'>
          <MdOutlineMoreVert className='text-2xl' />
        </div>
      </div>
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
          <div className='flex justify-between items-center bg-black p-2 text-[#f1f1f1] mt-2'>
            <div>Feature</div>
            <div>Team</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          {/* Table Rows */}
          {renderTableRow()}
        </div>
      </div>
    </main>
  );
}
