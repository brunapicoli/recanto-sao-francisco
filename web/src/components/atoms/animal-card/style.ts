import styled from 'styled-components';
import { colors } from '../../../styles/colors';

type AnimalCardContainerProps = {
  backgroundImage: string;
};

type AnimalCardContentProps = {
  male?: boolean;
  show?: boolean;
};

export const AnimalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const AnimalCardContainer = styled.div<AnimalCardContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
`;

export const AnimalCardContent = styled.div<AnimalCardContentProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px;
  border-radius: 8px;
  width: 290px;
  height: 392px;
  transition: 0.2s;
  opacity: ${({ show }) => (show ? 1 : 0)};
  background-color: ${({ male }) => (male ? 'rgba(117, 188, 254, 0.8)' : 'rgba(255, 134, 228, 0.8)')};
`;

export const AnimalCardName = styled.h2`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${colors.blueTertiary};
  text-align: center;
`;

export const AnimalCardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  color: ${colors.blueTertiary};
  margin: 5px 0;
`;

export const AnimalCardCharacteristics = styled.ul`
  margin-left: 16px;
`;

export const AnimalCardItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  list-style: disc;
  color: ${colors.blueTertiary};
`;

export const AnimalUpdateContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;
