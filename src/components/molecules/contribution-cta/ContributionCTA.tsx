import { BackgroundOverlay } from "../../atoms/background-overlay/BackgroundOverlay";
import { Button } from "../../atoms/button/Button";
import {
  ContributionCTAButtons,
  ContributionCTAContainer,
  ContributionCTAContent,
  ContributionCTATitle,
} from "./style";

type ContributionCTAProps = {
  bgGreen?: boolean;
};

export const ContributionCTA = ({ bgGreen }: ContributionCTAProps) => {
  const openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScpT925bG4ssxJRwf6R5jprubhn_GIBr1_A7-kIjOHG9hml-w/viewform"
    );
  };

  const navigateToAdoption = () => {
    window.location.replace("/adocao");
  };

  return (
    <ContributionCTAContainer bgGreen={bgGreen}>
      <ContributionCTAContent
        bgImg={require("../../../assets/images/dogs-playing.png")}
      >
        <BackgroundOverlay className="backgroundOverlay">
          <ContributionCTATitle>
            Você pode contribuir com o Recanto São Francisco!
          </ContributionCTATitle>
          <ContributionCTAButtons>
            <Button text="Seja um voluntário" onClick={openForm} />
            <Button
              text="Adote"
              variant="secondary"
              onClick={navigateToAdoption}
            />
          </ContributionCTAButtons>
        </BackgroundOverlay>
      </ContributionCTAContent>
    </ContributionCTAContainer>
  );
};
