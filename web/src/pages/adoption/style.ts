import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const AdoptionContainer = styled.section`
  margin: 35px 64px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 380px) {
    margin-right: 32px;
    margin-left: 32px;
  }
`;

export const AdoptionContent = styled.div`
  max-width: 790px;
`;

export const AdoptionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: ${colors.primaryText};

  @media (max-width: 380px) {
    font-size: 19px;
  }
`;

export const AdoptionList = styled.ul`
  padding: 3.4rem 0 0 5px;
  list-style-position: inside;
`;

export const AdoptionItem = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  color: ${colors.secondaryText};
`;

export const AdoptionText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  color: ${colors.secondaryText};
  margin-top: 2.8rem;
`;

export const AdoptionTextBold = styled.b``;

export const AdoptionAnimals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 7rem;
  margin-top: 6.4rem;
  border-top: 1px solid ${colors.border};
`;
