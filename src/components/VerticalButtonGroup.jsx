import React from 'react';

const VerticalButtonGroup = ({ buttons, onToggle }) => {
  return (
    <div className="fixed top-4 right-0 z-50 flex flex-col items-end space-y-2">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => onToggle(btn)}
          className="bg-blue-600 text-white text-xs px-2 py-3 rounded-l-md shadow hover:bg-blue-700"
          style={{ writingMode: 'vertical-rl', textOrientation: 'left' }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default VerticalButtonGroup;
