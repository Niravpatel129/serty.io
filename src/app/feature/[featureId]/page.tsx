export default function Page() {
  const renderRow = (
    email,
    plan,
    name,
    dynamicNav,
    planStatus,
    faq,
    faqStatus,
    disclaimer,
    disclaimerStatus,
  ) => {
    return (
      <div className='grid grid-cols-9 gap-4 items-center bg-[#f1f1f1] p-2 text-[#000] mt-2 hover:bg-[#e1e1e1] cursor-pointer transition-colors'>
        <div>{email}</div>
        <div>{plan}</div>
        <div>{name}</div>
        <div className='text-blue-500'>{dynamicNav}</div>
        <div className='text-green-500'>{planStatus}</div>
        <div>{faq}</div>
        <div className='text-green-500'>{faqStatus}</div>
        <div>{disclaimer}</div>
        <div className='text-green-500'>{disclaimerStatus}</div>
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
            <div>Email</div>
            <div>Plan</div>
            <div>Name</div>
            <div>Plans</div>
            <div></div>
            <div>FAQ</div>
            <div></div>
            <div>Disclaimer</div>
            <div></div>
          </div>

          {/* Table Rows */}
          {renderRow(
            'jclarke+v2Legacy@wave-test.net',
            'NA',
            'Fadia',
            'Receipts Only',
            'Success',
            'Has FAQ',
            'Success',
            'No Disclaimer',
            'Success',
          )}
          {renderRow(
            '',
            'NA',
            'Fadia',
            'Receipts + Pro',
            'Success',
            'Has FAQ',
            'Success',
            'CAD Disclaimer',
            'Success',
          )}
          {renderRow(
            'jclarke+v2MigratedStarter@wave-test.net',
            'NA (USD)',
            'Fadia',
            'Receipts + Pro',
            'Success',
            'Has FAQ',
            'Success',
            'USD Disclaimer',
            'Success',
          )}
          {renderRow(
            '',
            'NA',
            'Fadia',
            'Receipts + Pro',
            'Success',
            'Has FAQ',
            'Success',
            'CAD Disclaimer',
            'Success',
          )}
          {renderRow(
            'jclarke+v2StarterPlus@wave-test.net',
            'NA (USD)',
            'Fadia',
            'Receipts + Pro',
            'Success',
            'Has FAQ',
            'Success',
            'USD Disclaimer',
            'Success',
          )}
          {renderRow(
            '',
            'NA',
            'Jenn',
            'Receipts + Pro',
            'Success',
            'No FAQ',
            'Success',
            'CAD Disclaimer',
            'Success',
          )}
          {renderRow(
            '',
            'NA (USD)',
            'Jenn',
            'Receipts + Pro',
            'Success',
            'No FAQ',
            'Success',
            'USD Disclaimer',
            'Success',
          )}
          {renderRow('', 'NA - Pro', 'Jenn', '', '', '', '', '', '')}
          {renderRow('', 'NA - Pro (USD)', 'Jenn', '', '', '', '', '', '')}
          {renderRow('', 'NA - Payments', 'Jenn', '', '', '', '', '', '')}
          {renderRow('', 'NA - Payments (USD)', 'Jenn', '', '', '', '', '', '')}
          {renderRow('', 'NA - Pro - Payments', 'Linda', '', '', '', '', '', '')}
          {renderRow(
            'jclarke+v2Starter@wave-test.net',
            'NA - Pro - Payments (USD)',
            'Linda',
            '',
            '',
            '',
            '',
            '',
            '',
          )}
          {renderRow('', 'CAD Biz', 'Fadia', '', '', '', '', '', '')}
          {renderRow('Onboard New User/Business', 'USD Biz', 'Linda', '', '', '', '', '', '')}
        </div>
      </div>
    </main>
  );
}
