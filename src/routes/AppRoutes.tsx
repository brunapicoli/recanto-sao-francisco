import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Adoption } from "../pages/Adoption";
import { Contact } from "../pages/Contact";
import { Documentation } from "../pages/Documentation";
import { Help } from "../pages/Help";
import { Home } from "../pages/Home";
import { Leaders } from "../pages/Leaders";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Adoption />} path="/adocao" />
        <Route element={<Leaders />} path="/quem-somos" />
        <Route element={<Documentation />} path="/transparencia" />
        <Route element={<Help />} path="/como-ajudar" />
        <Route element={<Contact />} path="/contato" />
      </Routes>
    </BrowserRouter>
  );
};
