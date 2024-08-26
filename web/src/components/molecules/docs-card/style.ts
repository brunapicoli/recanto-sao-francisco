import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const DocsCardContainer = styled.div`
  border-radius: 8px;
  background-color: ${colors.blueSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 4rem;
  width: 40.9rem;
`;

export const DocsCardTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: ${colors.primaryText};
`;
