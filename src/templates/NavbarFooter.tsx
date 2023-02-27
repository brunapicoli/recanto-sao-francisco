import { Footer } from "../components/atoms/footer/Footer";
import { ContributionCTA } from "../components/molecules/contribution-cta/ContributionCTA";
import { Navbar } from "../components/molecules/navbar/Navbar";

type NavbarFooterProps = {
  children: React.ReactNode;
  bgGreenNavbar?: boolean;
  hideContributionCTA?: boolean;
  bgGreenContributionCTA?: boolean;
};

export const NavbarFooter = ({
  children,
  bgGreenNavbar,
  hideContributionCTA,
  bgGreenContributionCTA,
}: NavbarFooterProps) => {
  return (
    <>
      <Navbar bgGreen={bgGreenNavbar} />
      {children}
      {!hideContributionCTA && (
        <ContributionCTA bgGreen={bgGreenContributionCTA} />
      )}
      <Footer />
    </>
  );
};
