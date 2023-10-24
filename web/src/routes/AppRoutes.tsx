import { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Species } from 'models';
import { History } from '../components/molecules/history/History';
import { Adoption } from '../pages/adoption/Adoption';
import { Animals } from 'pages/animals/Animals';
import { Contact } from '../pages/Contact';
import { Documentation } from '../pages/Documentation';
import { Help } from '../pages/Help';
import { Home } from '../pages/home/Home';
import { Leaders } from '../pages/Leaders';

export const AppRoutes = () => {
  const ScrollToTop = ({ children }: any) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<History />} path="/nossa-história" />
          <Route element={<Adoption />} path="/adocao" />
          <Route element={<Animals animalSpecies={Species.DOG} />} path="/caes" />
          <Route element={<Animals animalSpecies={Species.CAT} />} path="/gatos" />
          <Route element={<Leaders />} path="/quem-somos" />
          <Route element={<Documentation />} path="/transparencia" />
          <Route element={<Help />} path="/como-ajudar" />
          <Route element={<Contact />} path="/contato" />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
