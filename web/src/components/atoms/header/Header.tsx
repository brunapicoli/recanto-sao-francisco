import { HeaderContainer, HeaderContent, HeaderImg, HeaderSubtitle, HeaderTextContainer, HeaderTitle } from './style';

type HeaderProps = {
  title: string;
  subtitle: string;
  img?: string;
  bgBlue?: boolean;
};

export const Header = ({ title, subtitle, img, bgBlue }: HeaderProps) => {
  return (
    <HeaderContainer bgBlue={bgBlue}>
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
