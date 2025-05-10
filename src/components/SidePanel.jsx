import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

const PANEL_WIDTH = 256; // 64rem = 256px

const SidePanel = ({ title, isPinned, onClose, onTogglePin, offsetIndex }) => {
  const rightOffset = 40 + offsetIndex * PANEL_WIDTH; // 48px right margin + index spacing

  return (
    <div
      className="fixed top-0 h-full w-64 bg-white shadow-lg border-l border-gray-200 z-40 transition-all"
      style={{ right: `${rightOffset}px` }}
    >
      <div className="flex justify-between items-center p-3 border-b bg-gray-100">
        <h3 className="text-md font-semibold">{title}</h3>
        <div className="flex gap-2 items-center">
          <button onClick={onTogglePin} title="Pin/Unpin">
            <FontAwesomeIcon
              icon={faThumbtack}
              className={`w-4 h-4 text-gray-600 transition-transform ${
                !isPinned ? 'rotate-45' : ''
              }`}
            />
          </button>
          <button onClick={onClose} className="text-gray-600 hover:text-black text-lg">
            &times;
          </button>
        </div>
      </div>
      <div className="p-4 text-sm text-gray-700">
        <p>{title} panel content here.</p>
      </div>
    </div>
  );
};

export default SidePanel;
