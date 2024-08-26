import { BackgroundOverlay } from '../../atoms/background-overlay/BackgroundOverlay';
import { Button } from '../../atoms/button/Button';
import DogsPlayingImg from 'assets/images/dogs-playing.png';
import {
  ContributionCTAButtons,
  ContributionCTAContainer,
  ContributionCTAContent,
  ContributionCTATitle,
} from './style';

type ContributionCTAProps = {
  bgBlue?: boolean;
};

export const ContributionCTA = ({ bgBlue }: ContributionCTAProps) => {
  const openForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScpT925bG4ssxJRwf6R5jprubhn_GIBr1_A7-kIjOHG9hml-w/viewform');
  };

  return (
    <ContributionCTAContainer bgBlue={bgBlue}>
      <ContributionCTAContent bgImg={DogsPlayingImg}>
        <BackgroundOverlay className="backgroundOverlay">
          <ContributionCTATitle>Você pode contribuir com o Recanto São Francisco!</ContributionCTATitle>
          <ContributionCTAButtons>
            <Button onClick={openForm}>Seja um voluntário</Button>
            <Button variant="secondary" link="/adocao">
              Adote
            </Button>
          </ContributionCTAButtons>
        </BackgroundOverlay>
      </ContributionCTAContent>
    </ContributionCTAContainer>
  );
};
