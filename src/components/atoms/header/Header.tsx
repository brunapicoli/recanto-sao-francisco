import { HeaderContainer, HeaderContent, HeaderImg, HeaderSubtitle, HeaderTextContainer, HeaderTitle } from './style';

export type ImgProps = {
  src: string;
  alt: string;
};

type HeaderProps = {
  title: string;
  subtitle: string;
  img?: ImgProps;
  bgGreen?: boolean;
};

export const Header = ({ title, subtitle, img, bgGreen }: HeaderProps) => {
  return (
    <HeaderContainer bgGreen={bgGreen}>
      <HeaderContent className={img ? 'space-between' : ''}>
        <HeaderTextContainer className={img ? 'margin-top' : ''}>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle className={img ? 'no-margin' : ''}>{subtitle}</HeaderSubtitle>
        </HeaderTextContainer>
        {img && <HeaderImg src={img.src} alt={img.alt}></HeaderImg>}
      </HeaderContent>
    </HeaderContainer>
  );
};
