import React, { createContext, useEffect, useState } from 'react';
import { api } from 'services/api';

interface AppContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  windowWidth: number;
}

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => React.useContext(AppContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const token = sessionStorage.getItem('token');

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(token));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    api.defaults.headers.common.Authorization = token;

    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        windowWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
