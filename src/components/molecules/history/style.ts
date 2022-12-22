import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HistoryContainer = styled.section`
  padding: 126px 110px 64px 206px;
  max-width: 1535px;
  margin-left: auto;
  margin-right: auto;

  .historyTitle {
    margin-left: -96px;
  }

  @media (max-width: 1350px) {
    padding-left: 142px;
    padding-right: 64px;
  }

  @media (max-width: 851px) {
    .historyTitle {
      margin-left: -73px;
    }
  }

  @media (max-width: 768px) {
    padding: 64px 110px;
  }

  @media (max-width: 480px) {
    padding: 64px;
  }

  @media (max-width: 380px) {
    padding-left: 56px;
    padding-right: 56px;
  }
`;

export const HistoryContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HistoryTextContainer = styled.div``;

export const HistoryText = styled.p`
  font-size: 1.6rem;
  line-height: 160%;
  color: ${colors.secondaryText};

  &:first-child {
    margin-top: 3.2rem;
  }

  &:not(.withoutMargin) {
    margin-bottom: 3.2rem;
  }
`;

export const HistoryBoldText = styled.b`
  display: flex;
`;

export const HistoryImage = styled.img`
  width: 480px;
  margin-left: 96px;
  margin-top: 16px;
  max-height: 227px;

  &.firstImage {
    margin-top: -62px;
    margin-bottom: 18px;
    max-height: 555px;
  }

  @media (max-width: 1350px) {
    margin-left: 64px;
  }

  @media (max-width: 1100px) {
    width: 39rem;
    max-height: 18.4rem;
    margin-left: 48px;

    &.firstImage {
      max-height: 45.1rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0px !important;
    margin-bottom: 32px !important;
    margin-left: 0 !important;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;
