import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../atoms/button/Button";
import {
  NavbarContainer,
  NavbarContent,
  NavbarLogo,
  NavbarLogoContainer,
  NavbarMenu,
  NavbarMenuList,
  NavbarSandwich,
  NavbarSandwichBar,
} from "./style";

export const Navbar = () => {
  const currentPath = useLocation().pathname;
  const [hideMenu, setHideMenu] = useState(false);
  const [openMenuSandwich, setOpenMenuSandwich] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const menuItems = [
    { title: "Adoção", link: "/adoção" },
    { title: "Quem somos", link: "/quem-somos" },
    { title: "Transparência", link: "/transparencia" },
    { title: "Como ajudar", link: "/como-ajudar" },
    { title: "Contato", link: "/contato" },
  ];

  const openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScpT925bG4ssxJRwf6R5jprubhn_GIBr1_A7-kIjOHG9hml-w/viewform"
    );
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    windowWidth < 620 ? setHideMenu(true) : setHideMenu(false);
  }, [windowWidth]);

  return (
    <NavbarContainer className={hideMenu ? "sandwichMenu" : ""}>
      <NavbarLogoContainer className={hideMenu ? "sandwichMenu" : ""}>
        <Link to="/">
          <NavbarLogo
            src={require("../../../assets/images/logo.png")}
            alt="Logo do Recanto São Francisco"
          />
        </Link>
        {hideMenu && (
          <NavbarSandwich
            onClick={() => setOpenMenuSandwich(!openMenuSandwich)}
          >
            <NavbarSandwichBar className={openMenuSandwich ? "open" : ""} />
            <NavbarSandwichBar className={openMenuSandwich ? "open" : ""} />
          </NavbarSandwich>
        )}
      </NavbarLogoContainer>
      {((openMenuSandwich && hideMenu) || !hideMenu) && (
        <NavbarContent className={hideMenu ? "sandwichMenu" : ""}>
          <NavbarMenu className={hideMenu ? "sandwichMenu" : ""}>
            <NavbarMenuList className={hideMenu ? "sandwichMenu" : ""}>
              {menuItems.map((item) => (
                <Link
                  className={`navbarItem ${
                    currentPath === item.link ? "active" : ""
                  }`}
                  to={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </NavbarMenuList>
            <Button text="Doar" variant="navbar" onClick={openForm} />
          </NavbarMenu>
        </NavbarContent>
      )}
    </NavbarContainer>
  );
};
