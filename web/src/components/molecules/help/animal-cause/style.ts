import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const AnimalCauseContainer = styled.section`
  padding: 2.7rem 64px 9.5rem;

  @media (max-width: 380px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const AnimalCauseContent = styled.div`
  max-width: 1125px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 11.5rem;

  @media (max-width: 619px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const AnimalCauseTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  @media (max-width: 619px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const AnimalCauseTitle = styled.h1`
  font-size: 5.6rem;
  line-height: 120%;
  color: ${colors.primaryText};
`;

export const AnimalCauseText = styled.p`
  font-size: 1.6rem;
  line-height: 160%;
  color: ${colors.secondaryText};
`;

export const AnimalCauseImage = styled.img`
  max-width: 42rem;
  width: 100%;
`;
