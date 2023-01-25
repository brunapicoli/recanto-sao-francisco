import { Footer } from "../components/atoms/footer/Footer";
import { ContributionCTA } from "../components/molecules/contribution-cta/ContributionCTA";
import { Navbar } from "../components/molecules/navbar/Navbar";

type NavbarFooterProps = {
  children: React.ReactNode;
  hideContributionCTA?: boolean;
  variantContributionCTA?: "green" | "white";
};

export const NavbarFooter = ({
  children,
  hideContributionCTA,
  variantContributionCTA,
}: NavbarFooterProps) => {
  return (
    <>
      <Navbar />
      {children}
      {!hideContributionCTA && (
        <ContributionCTA variant={variantContributionCTA} />
      )}
      <Footer />
    </>
  );
};
