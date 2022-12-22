import styled from "styled-components";
import { colors } from "../../../styles/colors";

type ContributionCTAContainerProps = {
  variant?: "green" | "white";
};

type ContributionCTAContentProps = {
  backgroundImage: string;
};

export const ContributionCTAContainer = styled.div<ContributionCTAContainerProps>`
  background-color: ${(props) =>
    props.variant === "green" ? colors.greenTertiary : colors.white};
  padding: 64px 110px;

  @media (max-width: 1350px) {
    padding: 64px;
  }
`;

export const ContributionCTAContent = styled.div<ContributionCTAContentProps>`
  background-image: url(${(props) => props.backgroundImage});
  border-radius: 12px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  .backgroundOverlay {
    width: 100%;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 450px) {
    background-position: 20%;
  }
`;

export const ContributionCTATitle = styled.h2`
  font-size: 4.8rem;
  line-height: 120%;
  font-weight: 700;
  margin: 7.6rem 32px 32px;
  color: ${colors.white};
  text-align: center;
  max-width: 635px;

  @media (max-width: 850px) {
    max-width: 425px;
  }

  @media (max-width: 450px) {
    margin-top: 32px;
    font-size: 24px;
  }
`;

export const ContributionCTAButtons = styled.div`
  display: flex;
  gap: 34px;
  margin-bottom: 10.9rem;

  @media (max-width: 450px) {
    flex-direction: column;
    margin-bottom: 32px;
    gap: 8px;
  }
`;
