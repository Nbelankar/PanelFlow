import React, { useEffect, useRef, useState } from 'react';
import SidePanel from './SidePanel';
import VerticalButtonGroup from './VerticalButtonGroup';

const buttons = ['Filters', 'Options', 'Search'];
const PANEL_WIDTH = 256;

const PanelManager = () => {
  const [openPanels, setOpenPanels] = useState([]);
  const [pinnedPanels, setPinnedPanels] = useState(new Set());
  const containerRef = useRef(null);

  const togglePanel = (panel) => {
    setOpenPanels((prev) =>
      prev.includes(panel) ? prev.filter((p) => p !== panel) : [...prev, panel]
    );
    setPinnedPanels((prev) => {
      const updated = new Set(prev);
      updated.delete(panel);
      return updated;
    });
  };

  const handleClose = (panel) => {
    setOpenPanels((prev) => prev.filter((p) => p !== panel));
    setPinnedPanels((prev) => {
      const updated = new Set(prev);
      updated.delete(panel);
      return updated;
    });
  };

  const handleTogglePin = (panel) => {
    setPinnedPanels((prev) => {
      const updated = new Set(prev);
      updated.has(panel) ? updated.delete(panel) : updated.add(panel);
      return updated;
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenPanels((prev) => prev.filter((p) => pinnedPanels.has(p)));
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [pinnedPanels]);

  return (
    <>
      <VerticalButtonGroup buttons={buttons} onToggle={togglePanel} />
      <div ref={containerRef}>
        {openPanels.map((panel, i) => (
          <SidePanel
            key={panel}
            title={panel}
            isPinned={pinnedPanels.has(panel)}
            onClose={() => handleClose(panel)}
            onTogglePin={() => handleTogglePin(panel)}
            offsetIndex={i}
          />
        ))}
      </div>
    </>
  );
};

export default PanelManager;
