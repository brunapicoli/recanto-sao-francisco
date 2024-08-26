import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const FooterContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 97px 220px 97px 110px;
  background-color: ${colors.black};
  position: relative;

  @media (max-width: 1350px) {
    padding: 97px 0;
  }

  @media (max-width: 1100px) {
    padding: 77px 0 150px;
  }

  @media (max-width: 850px) {
    padding: 57px 0 120px;
  }

  @media (max-width: 540px) {
    padding: 57px 0 200px;
  }
`;

export const FooterLogo = styled.img`
  width: 115px;

  @media (max-width: 850px) {
    width: 77px;
  }

  @media (max-width: 700px) {
    width: 70px;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;

  @media (max-width: 560px) {
    gap: 42px;
  }

  @media (max-width: 540px) {
    position: absolute;
    bottom: 40px;
  }

  @media (max-width: 270px) {
    gap: 24px;
  }
`;

export const FooterMenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a,
  button {
    color: ${colors.white};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
    text-decoration: none;
    opacity: 0.7;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

export const FooterMenuTitle = styled.h2`
  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 160%;
  margin-bottom: 2rem;
`;

export const FooterForm = styled.p`
  color: ${colors.white};
  font-size: 4rem;
  font-weight: 700;
  line-height: 140%;
  max-width: 380px;

  a {
    text-decoration: underline;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    border: none;
    font-size: inherit;
    font-weight: inherit;
  }

  @media (min-width: 541px) and (max-width: 1100px) {
    position: absolute;
    max-width: fit-content;
    bottom: 40px;
  }

  @media (max-width: 540px) {
    max-width: 210px;
    text-align: center;
    font-size: 3rem;
  }
`;
