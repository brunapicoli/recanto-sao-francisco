import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from 'context/AppContext';
import { Button } from '../../atoms/button/Button';
import LogoImg from 'assets/images/logo.png';
import {
  NavbarContainer,
  NavbarContent,
  NavbarLogo,
  NavbarLogoContainer,
  NavbarMenu,
  NavbarMenuList,
  NavbarSandwich,
  NavbarSandwichBar,
} from './style';

type NavbarProps = {
  bgBlue?: boolean;
};

export const Navbar = ({ bgBlue }: NavbarProps) => {
  const currentPath = useLocation().pathname;
  const { windowWidth } = useAppContext();

  const [hideMenu, setHideMenu] = useState(false);
  const [openMenuSandwich, setOpenMenuSandwich] = useState(false);

  const menuItems = [
    { title: 'Adoção', link: '/adocao' },
    { title: 'Quem somos', link: '/quem-somos' },
    { title: 'Transparência', link: '/transparencia' },
    { title: 'Como ajudar', link: '/como-ajudar' },
    { title: 'Contato', link: '/contato' },
  ];

  const openForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScpT925bG4ssxJRwf6R5jprubhn_GIBr1_A7-kIjOHG9hml-w/viewform');
  };

  useEffect(() => {
    windowWidth < 620 ? setHideMenu(true) : setHideMenu(false);
  }, [windowWidth]);

  return (
    <NavbarContainer bgBlue={bgBlue} className={hideMenu ? 'sandwichMenu' : ''}>
      <NavbarLogoContainer className={hideMenu ? 'sandwichMenu' : ''}>
        <Link to="/">
          <NavbarLogo src={LogoImg} alt="Recanto São Francisco" />
        </Link>
        {hideMenu && (
          <NavbarSandwich onClick={() => setOpenMenuSandwich(!openMenuSandwich)}>
            <NavbarSandwichBar className={openMenuSandwich ? 'open' : ''} />
            <NavbarSandwichBar className={openMenuSandwich ? 'open' : ''} />
          </NavbarSandwich>
        )}
      </NavbarLogoContainer>
      {((openMenuSandwich && hideMenu) || !hideMenu) && (
        <NavbarContent className={hideMenu ? 'sandwichMenu' : ''}>
          <NavbarMenu className={hideMenu ? 'sandwichMenu' : ''}>
            <NavbarMenuList className={hideMenu ? 'sandwichMenu' : ''}>
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  className={`navbarItem ${currentPath === item.link ? 'active' : ''}`}
                  to={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </NavbarMenuList>
            <Button variant="navbar" onClick={openForm}>
              Doar
            </Button>
          </NavbarMenu>
        </NavbarContent>
      )}
    </NavbarContainer>
  );
};
