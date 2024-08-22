import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const PersonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 29.8rem;
  border-radius: 8px;
  background-color: ${colors.greenTertiary};
  padding: 1.6rem 2.4rem;
`;

export const PersonCardName = styled.h2`
  font-size: 2rem;
  line-height: 140%;
  color: ${colors.primaryText};
`;

export const PersonCardPosition = styled.p`
  font-size: 1.2rem;
  line-height: 160%;
  color: ${colors.primaryText};
`;

export const PersonCardText = styled.p`
  font-size: 1.2rem;
  line-height: 160%;
  color: ${colors.primaryText};
`;
