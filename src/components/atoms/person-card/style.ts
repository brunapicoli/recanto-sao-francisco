import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const PersonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersonCardImage = styled.img`
  border-radius: 8px;
`;

export const PersonCardName = styled.h2`
  font-size: 2rem;
  line-height: 160%;
  margin: 16px auto 8px;
  color: ${colors.primaryText};
`;

export const PersonCardPosition = styled.p`
  font-size: 1.2rem;
  line-height: 160%;
  opacity: 0.6;
  color: ${colors.primaryText};
`;
