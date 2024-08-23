import { useState } from 'react';
import { AxiosError } from 'axios';
import { useAppContext } from 'context/AppContext';
import { useSnackbarContext } from 'context/SnackbarContext';
import { Animal, Species } from 'models/Animals';
import { Sex } from 'models/Sex';
import { AnimalService } from 'services/AnimalService';
import { getSizeText } from 'utils/AnimalUtil';
import { formatDateToMonthYear, stringToDate } from 'utils/DateUtil';
import { AnimalForm } from 'modals/animal-form/AnimalForm';
import { ConfirmAction } from 'modals/confirm-action/ConfirmAction';
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
  const { openSnackbar } = useSnackbarContext();

  const [isLoading, setIsLoading] = useState(false);
  const [openAnimalForm, setOpenAnimalForm] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [showAnimalInfo, setShowAnimalInfo] = useState(false);

  const male = animal.sex === Sex.MALE;

  const handleDeleteAnimal = async () => {
    try {
      setIsLoading(true);
      await AnimalService.deleteAnimal(animal.id);
      if (animal.species === Species.CAT) {
        const updatedCats = await AnimalService.getCats();
        setCats(updatedCats);
      } else {
        const updatedDogs = await AnimalService.getDogs();
        setDogs(updatedDogs);
      }
      setOpenConfirmDelete(false);
      openSnackbar({ message: 'Animal excluído com sucesso!' });
    } catch (error) {
      let errorMessage = 'Erro ao excluir animal.';
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMessage = errorMessage + ' ' + error.response?.data?.message;
      }
      openSnackbar({ message: errorMessage, error: true });
    } finally {
      setIsLoading(false);
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
              <AnimalCardItem>Porte {getSizeText(animal.size)}</AnimalCardItem>
              <AnimalCardItem>Entrada: {formatDateToMonthYear(stringToDate(animal.entryDate))}</AnimalCardItem>
            </AnimalCardCharacteristics>
          </AnimalCardContent>
        </AnimalCardContainer>
        {isLoggedIn && (
          <AnimalUpdateContainer>
            <Button variant="secondary" onClick={() => setOpenConfirmDelete(true)}>
              Excluir
            </Button>
            <Button variant="secondary" onClick={() => setOpenAnimalForm(true)}>
              Editar
            </Button>
          </AnimalUpdateContainer>
        )}
      </AnimalCardWrapper>
      <AnimalForm
        open={openAnimalForm}
        animal={animal}
        species={animal.species}
        onClose={() => setOpenAnimalForm(false)}
      />
      <ConfirmAction
        open={openConfirmDelete}
        contentText={`Confirmar exclusão de ${animal.name}?`}
        isLoading={isLoading}
        onConfirm={handleDeleteAnimal}
        onClose={() => setOpenConfirmDelete(false)}
      />
    </>
  );
};
