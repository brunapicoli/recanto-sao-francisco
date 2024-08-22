import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const DirectorsContainer = styled.section`
  margin: 27px auto 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DirectorsTitle = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  color: ${colors.primaryText};
  margin-bottom: 48px;
  text-align: center;
`;

export const DirectorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.2rem;
  margin: 0 114px;

  @media (max-width: 1350px) {
    margin: 0 64px;
  }

  @media (max-width: 380px) {
    margin: 0 32px;
  }
`;
