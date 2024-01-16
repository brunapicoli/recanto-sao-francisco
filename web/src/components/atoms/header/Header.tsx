import { HeaderContainer, HeaderContent, HeaderImg, HeaderSubtitle, HeaderTextContainer, HeaderTitle } from './style';

type HeaderProps = {
  title: string;
  subtitle: string;
  img?: string;
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
        {img && <HeaderImg src={img}></HeaderImg>}
      </HeaderContent>
    </HeaderContainer>
  );
};
