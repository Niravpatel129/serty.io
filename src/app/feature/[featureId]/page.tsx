export default function Page() {
  const renderTestCaseRow = () => {
    return (
      <div className='grid grid-cols-4 gap-4 items-center bg-[#f1f1f1] p-2 text-[#000] mt-2 hover:bg-[#e1e1e1] cursor-pointer transition-colors hover:outline hover:outline-[#000]'>
        <div className='text-center'>Tooltip Visibility</div>
        <div className='text-center'>UI/UX</div>
        <div className='text-center'>Not Started</div>
        <div className='flex justify-center items-center'>
          <select className='bg-transparent border border-gray-300 rounded px-2 py-1'>
            <option value=''>Actions</option>
            <option value='edit'>Edit</option>
            <option value='delete'>Delete</option>
            <option value='complete'>Complete</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Manual Test Cases</h1>
          <div className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer'>
            Add New Test Case
          </div>
        </div>
        {/* Table */}
        <div className='flex flex-col'>
          {/* Table Heading */}
          <div className='grid grid-cols-4 gap-4 items-center bg-black p-2 text-[#f1f1f1] mt-2'>
            <div className='text-center'>Test Case</div>
            <div className='text-center'>Category</div>
            <div className='text-center'>Status</div>
            <div className='text-center'>Actions</div>
          </div>

          {/* Table Rows */}
          {renderTestCaseRow()}
          {renderTestCaseRow()}
          {renderTestCaseRow()}
          {renderTestCaseRow()}
          {renderTestCaseRow()}
        </div>
      </div>
    </main>
  );
}
