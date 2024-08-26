import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HelpCardContainer = styled.div`
  display: flex;
  align-items: start;
  max-width: 384px;
  flex: 1;
`;

export const HelpCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.8rem;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 4px;
  background-color: ${colors.bluePrimary};
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
