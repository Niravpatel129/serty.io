'use client';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='p-2 mb-2 bg-gray-100'
    >
      {props.children}
    </li>
  );
}

export default function Page() {
  const [blocks, setBlocks] = useState({
    features: ['Feature 1', 'Feature 2'],
    accounts: ['john.doe@example.com', 'jane.doe@example.com'],
    browsers: ['Chrome', 'Firefox', 'Safari'],
  });

  const [selectedBlock, setSelectedBlock] = useState('');
  const [newValue, setNewValue] = useState('');
  const [activeTab, setActiveTab] = useState('table');
  const [testCases, setTestCases] = useState([]);
  const [currentTestCase, setCurrentTestCase] = useState({ name: '', items: [] });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const renderRow = (email, plan, name, dynamicNav, faq, disclaimer) => {
    return (
      <div className='grid grid-cols-9 gap-4 items-center bg-[#f1f1f1] p-2 text-[#000] mt-2 hover:bg-[#e1e1e1] cursor-pointer transition-colors'>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{email}</div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{plan}</div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{name}</div>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap bg-[#000] p-2 text-[#f1f1f1]'>
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

  const addItemToCurrentTestCase = (item) => {
    setCurrentTestCase({
      ...currentTestCase,
      items: [...currentTestCase.items, item],
    });
  };

  const removeItemFromCurrentTestCase = (index) => {
    const newItems = [...currentTestCase.items];
    newItems.splice(index, 1);
    setCurrentTestCase({
      ...currentTestCase,
      items: newItems,
    });
  };

  const saveCurrentTestCase = () => {
    if (currentTestCase.name && currentTestCase.items.length > 0) {
      setTestCases([...testCases, currentTestCase]);
      setCurrentTestCase({ name: '', items: [] });
    } else {
      alert('Please provide a name and add at least one item to the test case.');
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter}>
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
              className={`mr-2 px-4 py-2 ${
                activeTab === 'blocks' ? 'bg-[#000] text-[#f1f1f1]' : 'bg-gray-200'
              }`}
              onClick={() => setActiveTab('blocks')}
            >
              Blocks
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === 'createCase' ? 'bg-[#000] text-[#f1f1f1]' : 'bg-gray-200'
              }`}
              onClick={() => setActiveTab('createCase')}
            >
              Create Case
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

          {activeTab === 'createCase' && (
            <div className='mt-8 flex'>
              <div className='w-1/2 pr-4'>
                <h2 className='text-xl font-bold mb-4'>Available Items</h2>
                {Object.entries(blocks).map(([blockName, items]) => (
                  <div key={blockName}>
                    <h3 className='font-bold'>{blockName}</h3>
                    <ul className='min-h-[50px] border p-2'>
                      {items.map((item) => (
                        <li
                          key={item}
                          className='flex items-center justify-between p-2 mb-2 bg-gray-100'
                        >
                          {item}
                          <button
                            onClick={() => addItemToCurrentTestCase(item)}
                            className='bg-blue-500 text-white px-2 py-1 rounded'
                          >
                            +
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className='w-1/2 pl-4'>
                <h2 className='text-xl font-bold mb-4'>Current Test Case</h2>
                <input
                  type='text'
                  value={currentTestCase.name}
                  onChange={(e) => setCurrentTestCase({ ...currentTestCase, name: e.target.value })}
                  placeholder='Test Case Name'
                  className='border p-2 mb-4 w-full'
                />
                <ul className='min-h-[200px] border p-2'>
                  {currentTestCase.items.map((item, index) => (
                    <li
                      key={index}
                      className='flex items-center justify-between p-2 mb-2 bg-gray-100'
                    >
                      {item}
                      <button
                        onClick={() => removeItemFromCurrentTestCase(index)}
                        className='bg-red-500 text-white px-2 py-1 rounded'
                      >
                        -
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={saveCurrentTestCase}
                  className='bg-green-500 text-white px-4 py-2 rounded mt-4'
                >
                  Save Test Case
                </button>
              </div>
            </div>
          )}

          {/* Saved Test Cases */}
          {activeTab === 'createCase' && (
            <div className='mt-8'>
              <h2 className='text-xl font-bold mb-4'>Saved Test Cases</h2>
              {testCases.map((testCase, index) => (
                <div key={index} className='border p-4 mb-4'>
                  <h3 className='font-bold'>{testCase.name}</h3>
                  <ul>
                    {testCase.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </DndContext>
  );
}
