import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors } from '../../../styles/colors';

export const buttonStyles = css`
  border: none;
  border-radius: 4px;
  padding: 1.2rem 3.2rem;
  font-size: 1.6rem;
  display: flex;
  cursor: pointer;

  &.primary {
    background-color: ${colors.bluePrimary};
    color: ${colors.primaryText};
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
    opacity: 0.9;
    transition: 0.2s;
  }

  .link {
    text-decoration: none;
    color: inherit;
  }
`;

export const ButtonContainer = styled.button`
  ${buttonStyles}
`;

export const LinkContainer = styled(Link)`
  ${buttonStyles}
  text-decoration: none;
`;
