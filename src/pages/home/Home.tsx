import { History } from '../../components/molecules/history/History';
import { Mission } from '../../components/molecules/mission/Mission';
import { NavbarFooter } from '../../templates/NavbarFooter';
import BannerImg from 'assets/images/banner.png';
import { HomeBanner } from './style';

export const Home = () => {
  return (
    <NavbarFooter>
      <HomeBanner src={BannerImg} alt="Imagens de cães e gatos" />
      <History />
      <Mission />
    </NavbarFooter>
  );
};
