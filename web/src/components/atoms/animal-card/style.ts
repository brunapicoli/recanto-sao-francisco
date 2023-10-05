import styled from "styled-components";
import { colors } from "../../../styles/colors";

type AnimalCardContainerProps = {
  backgroundImage: string;
};

export const AnimalCardContainer = styled.div<AnimalCardContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  max-width: 290px;
  min-height: 392px;
  border-radius: 8px;
`;

export const AnimalCardContent = styled.div`
  padding: 24px 16px;
  min-height: 392px;
  border-radius: 8px;
  opacity: 0;
  transition: 0.2s;

  &.male {
    background-color: rgba(117, 188, 254, 0.8);
  }

  &.female {
    background-color: rgba(255, 134, 228, 0.8);
  }

  &.show {
    opacity: 1;
  }
`;

export const AnimalCardName = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${colors.offWhite};
  text-align: center;
`;

export const AnimalCardDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  color: ${colors.offWhite};
  margin: 5px 0;
`;

export const AnimalCardCharacteristics = styled.ul`
  margin-left: 16px;
`;

export const AnimalCardItem = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  color: ${colors.offWhite};
`;
