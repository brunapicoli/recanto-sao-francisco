import {
  PersonCardContainer,
  PersonCardImage,
  PersonCardName,
  PersonCardPosition,
} from "./style";

type PersonCardProps = {
  name: string;
  position: string;
  img?: string;
};

export const PersonCard = ({
  name,
  position,
  img = require("../../../assets/images/avatar.jpg"),
}: PersonCardProps) => {
  return (
    <PersonCardContainer>
      <PersonCardImage src={img} />
      <PersonCardName>{name}</PersonCardName>
      <PersonCardPosition>{position}</PersonCardPosition>
    </PersonCardContainer>
  );
};
