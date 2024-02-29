import { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { History } from '../components/molecules/home/history/History';
import { Adoption } from '../pages/adoption/Adoption';
import { Animals } from 'pages/animals/Animals';
import { Directors } from '../pages/directors/Directors';
import { Contact } from '../pages/contact/Contact';
import { Documentation } from '../pages/documentation/Documentation';
import { Help } from '../pages/help/Help';
import { Home } from '../pages/home/Home';

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
          <Route element={<Animals />} path="/adocao/caes" />
          <Route element={<Animals />} path="/adocao/gatos" />
          <Route element={<Directors />} path="/quem-somos" />
          <Route element={<Documentation />} path="/transparencia" />
          <Route element={<Help />} path="/como-ajudar" />
          <Route element={<Contact />} path="/contato" />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
