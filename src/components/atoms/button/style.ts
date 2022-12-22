import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const ButtonContainer = styled.button`
  border: none;
  border-radius: 4px;
  padding: 1.6rem 3.2rem;
  font-size: 1.6rem;
  cursor: pointer;

  &.primary {
    background-color: ${colors.greenPrimary};
    color: ${colors.white};
  }

  &.secondary {
    background-color: ${colors.white};
    color: ${colors.primaryText};
  }

  &.navbar {
    background-color: ${colors.primaryText};
    color: ${colors.white};
  }

  &:hover {
    opacity: 0.85;
    transition: 0.2s;
  }

  .link {
    text-decoration: none;
    color: inherit;
  }
`;
