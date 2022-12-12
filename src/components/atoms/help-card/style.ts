import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HelpCardContainer = styled.div`
  display: flex;
  align-items: start;
  max-width: 384px;
`;

export const HelpCardIcon = styled.img``;

export const HelpCardContent = styled.div`
  margin-left: 14px;
`;

export const HelpCardTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${colors.primaryText};
`;

export const HelpCardDescription = styled.p`
  font-size: 1.4rem;
  line-height: 160%;
  font-weight: 400;
  color: ${colors.secondaryText};
`;
