import { Header } from 'components/atoms/header/Header';
import { HowToHelp } from 'components/molecules/help/how-to-help/HowToHelp';
import { NavbarFooter } from '../../templates/NavbarFooter';
import CatAndDogImg from 'assets/images/cat-and-dog.png';

export const Help = () => {
  return (
    <NavbarFooter bgGreenContributionCTA>
      <Header
        title="Colabore com a causa animal"
        subtitle="Sua contribuição possibilita aos animais uma vida melhor."
        img={CatAndDogImg}
      />
      <HowToHelp />
    </NavbarFooter>
  );
};
