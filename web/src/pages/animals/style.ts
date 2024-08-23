import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const AnimalsContainer = styled.section`
  margin: 27px auto 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AnimalsTitle = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  color: ${colors.primaryText};
  margin-bottom: 48px;
`;

export const AddAnimalContainer = styled.div`
  margin-bottom: 2rem;
`;

export const AnimalsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  margin: 0 114px;
`;
