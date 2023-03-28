import OverlayImg from 'assets/images/overlay.png';
import { BackgroundOverlayContainer } from './style';

type BackgroundOverlayProps = {
  children: React.ReactNode;
  className?: string;
};

export const BackgroundOverlay = ({ children, className }: BackgroundOverlayProps) => {
  return (
    <BackgroundOverlayContainer className={className} backgroundImage={OverlayImg}>
      {children}
    </BackgroundOverlayContainer>
  );
};
