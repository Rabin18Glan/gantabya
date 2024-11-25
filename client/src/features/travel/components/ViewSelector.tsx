import React from 'react';

interface Props {
  selectedView: number;
  setSelectedView: (index: number) => void;
}

const ViewSelector: React.FC<Props> = ({ selectedView, setSelectedView }) => {
  const viewOptions = ['Posts', 'Map View'];

  return (
    <div className='flex gap-5 absolute right-20 top-36 '>
      {viewOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => setSelectedView(index)}
          className={` text-gray-700 border border-orange-400 shadow-lg shadow-orange-400 p-2 rounded-lg px-5 ${
            selectedView === index ? 'text-white bg-orange-500 shadow-none' : 'bg-white'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ViewSelector;
