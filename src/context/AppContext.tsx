import React, { createContext, useEffect, useState } from 'react';
import { Animal } from 'models/Animals';
import { AnimalService } from 'services/AnimalService';

interface AppContextProps {
  cats?: Animal[];
  dogs?: Animal[];
  getCats: () => Promise<void>;
  getDogs: () => Promise<void>;
  windowWidth: number;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [cats, setCats] = useState<Animal[]>();
  const [dogs, setDogs] = useState<Animal[]>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getCats = async () => {
    if (!cats) {
      try {
        const catsList = await AnimalService.getCats();
        setCats(catsList);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getDogs = async () => {
    if (!dogs) {
      try {
        const dogsList = await AnimalService.getDogs();
        setDogs(dogsList);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
        dogs,
        getCats,
        getDogs,
        windowWidth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
