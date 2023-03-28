import { ImgProps } from '../header/Header';
import { HelpCardContainer, HelpCardContent, HelpCardDescription, HelpCardIcon, HelpCardTitle } from './style';

type HelpCardProps = {
  title: string;
  description: string;
  img: ImgProps;
};

export const HelpCard = ({ title, description, img }: HelpCardProps) => {
  return (
    <HelpCardContainer>
      <HelpCardIcon src={img.src} alt={img.alt} />
      <HelpCardContent>
        <HelpCardTitle>{title}</HelpCardTitle>
        <HelpCardDescription>{description}</HelpCardDescription>
      </HelpCardContent>
    </HelpCardContainer>
  );
};
