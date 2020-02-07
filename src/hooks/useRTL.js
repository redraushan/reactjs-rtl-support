import { useState, useEffect, createContext } from 'react';

export const RTLContext = createContext({
  value: false,
  setValue: () => {}
});

function useRTL(isEnabled) {
  const context = RTLContext;
  const [isRTA, setIsRTL] = useState(isEnabled);
  const links = document.querySelectorAll('link[rel="stylesheet"]');

  useEffect(() => {
    if (isRTA) {
      if (links.length) {
        links.forEach(styleSheet => {
          if (styleSheet.href.endsWith('.chunk.css')) {
            const link = document.createElement('link');
            link.href = styleSheet.href.replace(/\.css$/, '.rtl.css');
            link.rel = 'stylesheet';
            document.body.appendChild(link);
            setIsRTL(true);
            context.value = true;
          }
        });
      }
    } else {
      links.forEach(style => {
        if (style.href.endsWith('.chunk.rtl.css')) {
          document.body.removeChild(style);
          context.value = false;
        }
      });
    }
  }, [context.value, isRTA, links]);

  const handler = setValue => {
    setIsRTL(setValue);
  };
  return [isRTA, handler];
}

export default useRTL;
