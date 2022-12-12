import {
  HelpCardContainer,
  HelpCardContent,
  HelpCardDescription,
  HelpCardIcon,
  HelpCardTitle,
} from "./style";

type HelpCardProps = {
  title: string;
  description: string;
  img: string;
};

export const HelpCard = ({ title, description, img }: HelpCardProps) => {
  return (
    <HelpCardContainer>
      <HelpCardIcon src={img} />
      <HelpCardContent>
        <HelpCardTitle>{title}</HelpCardTitle>
        <HelpCardDescription>{description}</HelpCardDescription>
      </HelpCardContent>
    </HelpCardContainer>
  );
};
