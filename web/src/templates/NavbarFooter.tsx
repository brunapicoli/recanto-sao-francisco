import { Footer } from '../components/atoms/footer/Footer';
import { ContributionCTA } from '../components/molecules/contribution-cta/ContributionCTA';
import { Navbar } from '../components/molecules/navbar/Navbar';

type NavbarFooterProps = {
  children: React.ReactNode;
  bgBlueNavbar?: boolean;
  hideContributionCTA?: boolean;
  bgBlueContributionCTA?: boolean;
};

export const NavbarFooter = ({
  children,
  bgBlueNavbar,
  hideContributionCTA,
  bgBlueContributionCTA,
}: NavbarFooterProps) => {
  return (
    <>
      <Navbar bgBlue={bgBlueNavbar} />
      {children}
      {!hideContributionCTA && <ContributionCTA bgBlue={bgBlueContributionCTA} />}
      <Footer />
    </>
  );
};
