import styled from 'styled-components';
import { colors } from '../../../styles/colors';

type NavbarContainerProps = {
  bgBlue?: boolean;
};

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0;
  background-color: ${(props) => (props.bgBlue ? colors.blueTertiary : colors.white)};

  &.sandwichMenu {
    flex-direction: column;
  }
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  align-items: center;

  &.sandwichMenu {
    width: 100%;
    justify-content: space-around;
  }
`;

export const NavbarLogo = styled.img`
  width: 115px;

  @media (max-width: 850px) {
    width: 77px;
  }

  @media (max-width: 700px) {
    width: 70px;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;

  &.sandwichMenu {
    margin-top: 24px;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;

  &.sandwichMenu {
    flex-direction: column;
  }
`;

export const NavbarMenuList = styled.div`
  display: flex;
  gap: 40px;

  &.sandwichMenu {
    flex-direction: column;
    text-align: center;
  }

  .navbarItem {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.secondaryText};
    text-decoration: none;

    &.active {
      font-weight: 700;
    }

    &:last-child {
      margin-right: 60px;

      @media (max-width: 700px) {
        margin-right: 50px;
      }

      @media (max-width: 620px) {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }

    &:hover {
      opacity: 0.9;
      transition: 0.2s;
    }
  }

  @media (max-width: 700px) {
    gap: 30px;
  }
`;

export const NavbarSandwich = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const NavbarSandwichBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 2px;
  width: 28px;
  border-radius: 30px;
  background: ${colors.primaryText};
  transition: 0.25s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  &.open:first-child {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    margin-bottom: -2px;
  }

  &.open:last-child {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin-bottom: 0px;
  }
`;
