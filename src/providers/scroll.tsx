import React, { createContext, useEffect, useState } from 'react';

interface ScrollContent {
  yPosition: number;
};

export const ScrollContext = createContext<ScrollContent>({yPosition: 0});

export const ScrollProvider: React.FC = ({children}) => {
  const [y, setY] = useState<number>(0);
  useEffect(() => {
    window.onscroll = () => {
      let y = +window.scrollY;
      if (y < window.innerHeight) setY(+window.scrollY);
    };
    return () => {window.onscroll = null};
  }, []);
  return (
    <ScrollContext.Provider value={{ yPosition: y }}>
      {children}
    </ScrollContext.Provider>
  );
};
