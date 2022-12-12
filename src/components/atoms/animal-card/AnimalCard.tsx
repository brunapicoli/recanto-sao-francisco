import { useState } from "react";
import {
  AnimalCardCharacteristics,
  AnimalCardContainer,
  AnimalCardContent,
  AnimalCardDescription,
  AnimalCardItem,
  AnimalCardName,
} from "./style";

type AnimalCardProps = {
  name: string;
  description: string;
  sex: "male" | "female";
  age: number;
  size: "small" | "medium" | "large";
  entryDate: string;
  backgroundImage: string;
};

export const AnimalCard = ({
  name,
  description,
  sex,
  age,
  size,
  entryDate,
  backgroundImage,
}: AnimalCardProps) => {
  const [showAnimalInfo, setShowAnimalInfo] = useState(false);
  return (
    <AnimalCardContainer
      backgroundImage={backgroundImage}
      onMouseEnter={() => {
        setShowAnimalInfo(true);
      }}
      onMouseLeave={() => {
        setShowAnimalInfo(false);
      }}
    >
      <AnimalCardContent className={`${sex} ${showAnimalInfo ? "show" : ""}`}>
        <AnimalCardName>{name.toUpperCase()}</AnimalCardName>
        <AnimalCardDescription>{description}</AnimalCardDescription>
        <AnimalCardCharacteristics>
          <AnimalCardItem>
            {sex === "male" ? "Macho" : "Fêmea"}, {age}{" "}
            {age > 1 ? "anos" : "ano"}
          </AnimalCardItem>
          <AnimalCardItem>
            Porte{" "}
            {size === "small"
              ? "pequeno"
              : size === "medium"
              ? "médio"
              : "grande"}
          </AnimalCardItem>
          <AnimalCardItem>Entrada: {entryDate}</AnimalCardItem>
        </AnimalCardCharacteristics>
      </AnimalCardContent>
    </AnimalCardContainer>
  );
};
