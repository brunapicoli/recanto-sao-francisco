import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const DocumentationContainer = styled.section`
  margin: 27px auto 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DocumentationTitle = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  color: ${colors.primaryText};
  margin-bottom: 48px;
  text-align: center;
`;

export const DocumentationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 27px;
  margin: 0 114px;

  @media (max-width: 1350px) {
    margin: 0 64px;
  }
`;
