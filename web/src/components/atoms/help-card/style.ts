import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HelpCardContainer = styled.div`
  display: flex;
  align-items: start;
  max-width: 384px;
  flex: 1;
`;

export const HelpCardIcon = styled.img`
  width: 2.8rem;
`;

export const HelpCardContent = styled.div`
  margin-left: 14px;
`;

export const HelpCardTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${colors.primaryText};
`;
