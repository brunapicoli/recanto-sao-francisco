import { History } from "../../components/molecules/history/History";
import { Mission } from "../../components/molecules/mission/Mission";
import { NavbarFooter } from "../../templates/NavbarFooter";
import { HomeBanner } from "./style";

export const Home = () => {
  return (
    <NavbarFooter>
      <HomeBanner
        src={require("../../assets/images/banner.png")}
        alt="Imagens de cães e gatos"
      />
      <History />
      <Mission />
    </NavbarFooter>
  );
};
