import styled from "styled-components";
import { colors } from "../../../styles/colors";

type ProjectCardContainerProps = {
  backgroundImage: string;
};

export const ProjectCardContainer = styled.div<ProjectCardContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  max-width: 411px;
  min-height: 421px;

  .backgroundOverlay {
    max-width: 411px;
    min-height: 421px;
    padding: 80px 48px 0px;
  }
`;

export const ProjectCardTitle = styled.h3`
  font-size: 2.8rem;
  line-height: 150%;
  font-weight: 700;
  margin-bottom: 58px;
  color: ${colors.white};
`;

export const ProjectCardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 160%;
  font-weight: 400;
  color: ${colors.white};
`;
