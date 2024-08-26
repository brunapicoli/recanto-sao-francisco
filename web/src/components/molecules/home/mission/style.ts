import styled from 'styled-components';
import { colors } from '../../../../styles/colors';

export const MissionBackground = styled.div`
  position: relative;
  background-color: ${colors.blueTertiary};
`;

export const MissionBackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 100%;
`;

export const MissionContainer = styled.section`
  padding: 96px 110px 122px 206px;
  max-width: 1535px;
  margin-left: auto;
  margin-right: auto;

  .missionTitle {
    margin-left: -96px;

    @media (max-width: 851px) {
      margin-left: -73px;
    }

    @media (max-width: 380px) {
      margin-left: 0;
    }
  }

  @media (max-width: 1350px) {
    padding-left: 142px;
    padding-right: 64px;
  }

  @media (max-width: 768px) {
    padding: 64px 110px;
  }

  @media (max-width: 480px) {
    padding: 64px;
  }

  @media (max-width: 380px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const MissionContent = styled.div`
  display: flex;
  margin-top: 3.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MissionTextContainer = styled.div`
  z-index: 1;
`;

export const MissionText = styled.p`
  font-size: 1.6rem;
  line-height: 160%;
  color: ${colors.secondaryText};
  margin-bottom: 3.2rem;
`;

export const MissionImage = styled.img`
  width: 480px;
  margin-left: 96px;
  z-index: 1;

  @media (max-width: 1350px) {
    margin-left: 64px;
  }

  @media (max-width: 1100px) {
    width: 39rem;
    max-height: 51.6rem;
    margin-left: 48px;
  }

  @media (max-width: 768px) {
    margin: 0px !important;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;
