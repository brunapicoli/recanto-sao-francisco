import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleLine = styled.div`
  content: "";
  width: 7.2rem;
  height: 2px;
  background-color: ${colors.primaryText};
  margin-right: 24px;
`;

export const TitleContent = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
`;
