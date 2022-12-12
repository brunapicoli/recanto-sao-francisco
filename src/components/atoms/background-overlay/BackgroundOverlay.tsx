import { BackgroundOverlayContainer } from "./style";

type BackgroundOverlayProps = {
  children: React.ReactNode;
  className?: string;
};

export const BackgroundOverlay = ({
  children,
  className,
}: BackgroundOverlayProps) => {
  return (
    <BackgroundOverlayContainer
      className={className}
      backgroundImage={require("../../../assets/images/overlay.png")}
    >
      {children}
    </BackgroundOverlayContainer>
  );
};
