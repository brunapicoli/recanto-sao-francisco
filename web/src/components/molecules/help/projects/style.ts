import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const ProjectsContainer = styled.section`
  padding: 9.7rem 11rem;

  @media (max-width: 1350px) {
    padding: 64px;
  }

  @media (max-width: 380px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6.4rem;
`;

export const ProjectsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const ProjectsSubtitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: ${colors.primaryText};
`;

export const ProjectsTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  color: ${colors.primaryText};
`;

export const ProjectsList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
