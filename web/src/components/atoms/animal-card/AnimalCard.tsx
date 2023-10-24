import { useState } from 'react';
import { Animal, Sex, Size } from 'models';
import {
  AnimalCardCharacteristics,
  AnimalCardContainer,
  AnimalCardContent,
  AnimalCardDescription,
  AnimalCardItem,
  AnimalCardName,
} from './style';

type AnimalCardProps = {
  animal: Animal;
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  const [showAnimalInfo, setShowAnimalInfo] = useState(false);

  const male = animal.sex === Sex.MALE;

  const getDate = () => {
    const date = new Date(animal.entryDate);
    const month = date.toLocaleDateString('pt-BR', { month: 'long' });
    const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const year = date.getUTCFullYear();
    return formattedMonth + ' de ' + year;
  };

  const getSize = () => {
    switch (animal.size) {
      case Size.SMALL:
        return 'pequeno';
      case Size.MEDIUM:
        return 'médio';
      default:
        return 'grande';
    }
  };

  return (
    <AnimalCardContainer
      backgroundImage={animal.photo}
      onMouseEnter={() => {
        setShowAnimalInfo(true);
      }}
      onMouseLeave={() => {
        setShowAnimalInfo(false);
      }}
    >
      <AnimalCardContent show={showAnimalInfo} male={male}>
        <div>
          <AnimalCardName>{animal.name.toUpperCase()}</AnimalCardName>
          <AnimalCardDescription>{animal.description}</AnimalCardDescription>
        </div>
        <AnimalCardCharacteristics>
          <AnimalCardItem>
            {male ? 'Macho' : 'Fêmea'}, {animal.age} {animal.age > 1 ? 'anos' : 'ano'}
          </AnimalCardItem>
          <AnimalCardItem>Porte {getSize()}</AnimalCardItem>
          <AnimalCardItem>Entrada: {getDate()}</AnimalCardItem>
        </AnimalCardCharacteristics>
      </AnimalCardContent>
    </AnimalCardContainer>
  );
};
