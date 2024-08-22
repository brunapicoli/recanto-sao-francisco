import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const DirectorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 29.8rem;
  border-radius: 8px;
  background-color: ${colors.greenSecondary};
  padding: 1.6rem 2.4rem;
`;

export const DirectorCardName = styled.h2`
  font-size: 2rem;
  line-height: 140%;
  color: ${colors.primaryText};
`;

export const DirectorCardPosition = styled.p`
  font-size: 1.2rem;
  line-height: 160%;
  color: ${colors.primaryText};
`;

export const DirectorCardText = styled.p`
  font-size: 1.2rem;
  line-height: 160%;
  color: ${colors.primaryText};
`;
