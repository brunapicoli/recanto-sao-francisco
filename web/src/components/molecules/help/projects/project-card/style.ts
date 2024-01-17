import styled from 'styled-components';
import { colors } from '../../../../../styles/colors';

type ProjectCardContainerProps = {
  backgroundImage: string;
};

export const ProjectCardContainer = styled.div<ProjectCardContainerProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  max-width: 411px;
  border-radius: 12px;

  .backgroundOverlay {
    max-width: 411px;
    height: 100%;
    border-radius: 12px;
    padding: 80px 48px;

    @media (max-width: 1290px) {
      padding: 48px;
    }

    @media (max-width: 380px) {
      padding-left: 24px;
      padding-right: 24px;
    }
  }
`;

export const ProjectCardTitle = styled.h3`
  font-size: 2.8rem;
  line-height: 150%;
  font-weight: 700;
  margin-bottom: 58px;
  color: ${colors.white};

  @media (max-width: 1290px) {
    margin-bottom: 29px;
  }
`;

export const ProjectCardDescription = styled.p`
  font-size: 1.6rem;
  line-height: 160%;
  font-weight: 400;
  color: ${colors.white};
`;
