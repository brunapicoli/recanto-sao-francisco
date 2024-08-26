import { HelpCardContainer, HelpCardContent, HelpCardIcon, HelpCardTitle } from './style';

export type HelpCardProps = {
  title: string;
  description: React.ReactNode;
  img: string;
};

export const HelpCard = ({ title, description, img }: HelpCardProps) => {
  return (
    <HelpCardContainer>
      <HelpCardIcon>
        <img src={img} alt="" />
      </HelpCardIcon>
      <HelpCardContent>
        <HelpCardTitle>{title}</HelpCardTitle>
        {description}
      </HelpCardContent>
    </HelpCardContainer>
  );
};
