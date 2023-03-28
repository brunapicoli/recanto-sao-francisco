import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const AnimalsCardContainer = styled.div`
  border-radius: 8px;
  background-color: ${colors.greenSecondary};
  width: fit-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-right: 6rem;

  @media (max-width: 590px) {
    padding-right: 0;
  }

  @media (max-width: 450px) {
    padding-bottom: 30px;
  }
`;

export const AnimalsCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 40px 4rem 40px;

  @media (max-width: 450px) {
    padding-left: 0px;
  }
`;

export const AnimalsCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const AnimalsCardImgs = styled.div`
  display: flex;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const AnimalsCardImg = styled.img`
  width: 20rem;
  height: 20rem;
`;
