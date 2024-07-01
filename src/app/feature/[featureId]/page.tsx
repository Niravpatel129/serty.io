export default function Page() {
  const renderRow = (email, plan, name, dynamicNav, faq, disclaimer) => {
    return (
      <div className='grid grid-cols-9 gap-4 items-center bg-[#f1f1f1] p-2 text-[#000] mt-2 hover:bg-[#e1e1e1] cursor-pointer transition-colors'>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{email}</div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{plan}</div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{name}</div>
        <div className='text-blue-500 overflow-hidden text-ellipsis whitespace-nowrap'>
          {dynamicNav}
        </div>

        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{faq}</div>

        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{disclaimer}</div>
      </div>
    );
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-7xl items-center justify-between font-mono text-sm'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Dynamic Nav from Receipts</h1>
        </div>
        {/* Table */}
        <div className='flex flex-col'>
          {/* Table Heading */}
          <div className='grid grid-cols-9 gap-4 items-center bg-[#000] p-2 text-[#f1f1f1] mt-2'>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap'>Email</div>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap'>Plan</div>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap'>Name</div>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap'>Plans</div>
            <div></div>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap'>FAQ</div>
            <div></div>
            <div className='overflow-hidden text-ellipsis whitespace-nowrap'>Disclaimer</div>
            <div></div>
          </div>

          {/* Table Rows */}
          {renderRow(
            'john.doe@example.com',
            'Basic',
            'John',
            'Receipts Only',
            'Has FAQ',
            'Complete',
          )}
        </div>
      </div>
    </main>
  );
}
