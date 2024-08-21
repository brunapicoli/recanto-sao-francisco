import { useState } from 'react';
import { useAppContext } from 'context/AppContext';
import { Animal, Sex, Size, Species } from 'models/Animals';
import { AnimalService } from 'services/AnimalService';
import { formatDateToMonthYear, stringToDate } from 'utils/DateUtil';
import { AnimalForm } from 'modals/animal-form/AnimalForm';
import { Button } from '../button/Button';
import {
  AnimalCardCharacteristics,
  AnimalCardContainer,
  AnimalCardContent,
  AnimalCardDescription,
  AnimalCardItem,
  AnimalCardName,
  AnimalCardWrapper,
  AnimalUpdateContainer,
} from './style';

type AnimalCardProps = {
  animal: Animal;
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { isLoggedIn, setCats, setDogs } = useAppContext();

  const [openAnimalForm, setOpenAnimalForm] = useState(false);
  const [showAnimalInfo, setShowAnimalInfo] = useState(false);

  const male = animal.sex === Sex.MALE;

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

  const handleDeleteAnimal = async () => {
    await AnimalService.deleteAnimal(animal.id);
    if (animal.species === Species.CAT) {
      const updatedCats = await AnimalService.getCats();
      setCats(updatedCats);
    } else {
      const updatedDogs = await AnimalService.getDogs();
      setDogs(updatedDogs);
    }
  };

  return (
    <>
      <AnimalCardWrapper>
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
              <AnimalCardItem>Entrada: {formatDateToMonthYear(stringToDate(animal.entryDate))}</AnimalCardItem>
            </AnimalCardCharacteristics>
          </AnimalCardContent>
        </AnimalCardContainer>
        {isLoggedIn && (
          <AnimalUpdateContainer>
            <Button text="Excluir" onClick={handleDeleteAnimal} />
            <Button text="Editar" onClick={() => setOpenAnimalForm(true)} />
          </AnimalUpdateContainer>
        )}
      </AnimalCardWrapper>
      <AnimalForm
        open={openAnimalForm}
        animal={animal}
        species={animal.species}
        onClose={() => setOpenAnimalForm(false)}
      />
    </>
  );
};
