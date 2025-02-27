import { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Admin } from 'pages/admin/Admin';
import { Adoption } from 'pages/adoption/Adoption';
import { Cats } from 'pages/animals/cats/Cats';
import { Dogs } from 'pages/animals/dogs/Dogs';
import { Directors } from 'pages/directors/Directors';
import { Contact } from 'pages/contact/Contact';
import { Documentation } from 'pages/documentation/Documentation';
import { Help } from 'pages/help/Help';
import { Home } from 'pages/home/Home';

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
          <Route element={<Adoption />} path="/adocao" />
          <Route element={<Dogs />} path="/adocao/caes" />
          <Route element={<Cats />} path="/adocao/gatos" />
          <Route element={<Directors />} path="/quem-somos" />
          <Route element={<Documentation />} path="/transparencia" />
          <Route element={<Help />} path="/como-ajudar" />
          <Route element={<Contact />} path="/contato" />
          <Route element={<Admin />} path="/admin" />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
