import AvatarImg from 'assets/images/avatar.jpg';
import { PersonCardContainer, PersonCardImage, PersonCardName, PersonCardPosition } from './style';

type PersonCardProps = {
  name: string;
  position: string;
  img?: string;
};

export const PersonCard = ({ name, position, img = AvatarImg }: PersonCardProps) => {
  return (
    <PersonCardContainer>
      <PersonCardImage src={img} alt={name} />
      <PersonCardName>{name}</PersonCardName>
      <PersonCardPosition>{position}</PersonCardPosition>
    </PersonCardContainer>
  );
};
