import React, { createContext, useEffect, useState } from 'react';

interface AppContextProps {
  windowWidth: number;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        windowWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
