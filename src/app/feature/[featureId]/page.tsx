'use client';
import { useState } from 'react';

export default function Page() {
  const [blocks, setBlocks] = useState({
    accounts: ['john.doe@example.com', 'jane.doe@example.com'],
    browsers: ['Chrome', 'Firefox', 'Safari'],
    testCases: ['Test Case 1', 'Test Case 2'],
  });

  const [selectedBlock, setSelectedBlock] = useState('');
  const [newValue, setNewValue] = useState('');
  const [activeTab, setActiveTab] = useState('table'); // 'table' or 'blocks'

  const renderRow = (email, plan, name, dynamicNav, faq, disclaimer) => {
    return (
      <div className='grid grid-cols-9 gap-4 items-center bg-[#f1f1f1] p-2 text-[#000] mt-2 hover:bg-[#e1e1e1] cursor-pointer transition-colors'>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{email}</div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{plan}</div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{name}</div>
        <div className=' overflow-hidden text-ellipsis whitespace-nowrap bg-[#000] p-2 text-[#f1f1f1]'>
          {dynamicNav}
        </div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{faq}</div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{disclaimer}</div>
      </div>
    );
  };

  const handleAddBlock = () => {
    if (selectedBlock) {
      if (selectedBlock in blocks) {
        alert('Block already exists');
      } else {
        setBlocks({ ...blocks, [selectedBlock]: [] });
        setSelectedBlock('');
      }
    } else {
      alert('Please enter a block name');
    }
  };

  const handleAddValueToBlock = (blockName) => {
    if (newValue) {
      setBlocks({
        ...blocks,
        [blockName]: [...blocks[blockName], newValue],
      });
      setNewValue('');
    }
  };

  const handleRemoveFromBlock = (blockName, index) => {
    const newBlocks = { ...blocks };
    newBlocks[blockName].splice(index, 1);
    setBlocks(newBlocks);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-7xl items-center justify-between font-mono text-sm'>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-2xl font-bold'>Dynamic Nav from Receipts</h1>
        </div>

        {/* Tabs */}
        <div className='flex mb-4'>
          <button
            className={`mr-2 px-4 py-2 ${
              activeTab === 'table' ? 'bg-[#000] text-[#f1f1f1]' : 'bg-gray-200'
            }`}
            onClick={() => setActiveTab('table')}
          >
            Table
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'blocks' ? 'bg-[#000] text-[#f1f1f1]' : 'bg-gray-200'
            }`}
            onClick={() => setActiveTab('blocks')}
          >
            Blocks
          </button>
        </div>

        {activeTab === 'table' && (
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
        )}

        {activeTab === 'blocks' && (
          <div className='mt-8'>
            <h2 className='text-xl font-bold mb-4'>Create Blocks</h2>

            {/* Add Block */}
            <div className='flex mb-4'>
              <input
                type='text'
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                placeholder='Enter block name'
                className='border p-2 mr-2'
              />
              <button
                onClick={handleAddBlock}
                className='bg-[#000] text-[#f1f1f1] px-4 py-2 rounded'
              >
                Add Block
              </button>
            </div>

            {/* Display Blocks */}
            {Object.entries(blocks).map(([blockName, items]) => (
              <div key={blockName} className='mb-4'>
                <h3 className='font-bold'>{blockName}</h3>
                <ul>
                  {items.map((item, index) => (
                    <li key={index} className='flex items-center'>
                      <span>{item}</span>
                      <button
                        onClick={() => handleRemoveFromBlock(blockName, index)}
                        className='ml-2 text-red-500'
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className='flex mt-2'>
                  <input
                    type='text'
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder='Enter new value'
                    className='border p-2 mr-2'
                  />
                  <button
                    onClick={() => handleAddValueToBlock(blockName)}
                    className='bg-[#000] text-[#f1f1f1] px-4 py-2 rounded'
                  >
                    Add Value
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
