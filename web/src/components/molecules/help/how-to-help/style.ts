import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const HowToHelpContainer = styled.section`
  padding: 9.7rem 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blueTertiary};

  @media (max-width: 1350px) {
    padding: 64px;
  }

  @media (max-width: 380px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const HowToHelpContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const HowToHelpTitle = styled.h1`
  font-size: 4.8rem;
  line-height: 120%;
  color: ${colors.primaryText};

  @media (max-width: 540px) {
    text-align: center;
  }
`;

export const HowToHelpList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6.4rem;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const HowToHelpText = styled.p`
  font-size: 1.4rem;
  line-height: 160%;
  font-weight: 400;
  color: ${colors.secondaryText};
  opacity: 0.9;
`;

export const HowToHelpTextBold = styled.b`
  font-weight: 600;
`;
