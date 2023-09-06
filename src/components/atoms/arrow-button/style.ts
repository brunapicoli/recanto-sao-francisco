import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ArrowButtonContainer = styled.button`
  border: none;
  border-radius: 50px;
  padding: 2rem;
  background-color: ${colors.white};
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
    transition: 0.2s;
  }
`;

export const ArrowButtonIcon = styled.img`
  width: 2rem;
  height: 1.6rem;
`;
