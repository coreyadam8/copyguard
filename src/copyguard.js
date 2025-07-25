// copyguard.js 
// A tiny JavaScript library to block copy, paste, cut, and right-click actions.
// Author: Corey Adam
// License: MIT

const Copyguard = (() => {
  let options = {
    blockCopy: true,
    blockPaste: true,
    blockCut: true,
    blockRightClick: true,
    onViolation: null // optional callback
  };

  function handleKeydown(e) {
    const combo = e.ctrlKey || e.metaKey;
    const key = e.key.toLowerCase();

    if (combo && options.blockCopy && key === 'c') {
      e.preventDefault();
      options.onViolation?.('copy');
    }
    if (combo && options.blockPaste && key === 'v') {
      e.preventDefault();
      options.onViolation?.('paste');
    }
    if (combo && options.blockCut && key === 'x') {
      e.preventDefault();
      options.onViolation?.('cut');
    }
  }

  function handleContextMenu(e) {
    if (options.blockRightClick) {
      e.preventDefault();
      options.onViolation?.('contextmenu');
    }
  }

  return {
    enable(userOptions = {}) {
      Object.assign(options, userOptions);
      document.addEventListener('keydown', handleKeydown);
      document.addEventListener('contextmenu', handleContextMenu);
    },
    disable() {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('contextmenu', handleContextMenu);
    }
  };
})();
