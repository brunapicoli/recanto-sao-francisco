import { Animal } from 'models';
import React, { createContext, useEffect, useState } from 'react';

interface AppContextProps {
  cats: Animal[];
  setCats: (cats: Animal[]) => void;
  dogs: Animal[];
  setDogs: (dogs: Animal[]) => void;
  windowWidth: number;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [cats, setCats] = useState<Animal[]>([]);
  const [dogs, setDogs] = useState<Animal[]>([]);
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
        cats,
        setCats,
        dogs,
        setDogs,
        windowWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
