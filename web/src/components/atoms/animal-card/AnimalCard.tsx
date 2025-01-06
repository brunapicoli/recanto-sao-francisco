import { useState } from 'react';
import { useAppContext } from 'context/AppContext';
import { useSnackbarContext } from 'context/SnackbarContext';
import { getGetCatsQueryKey, getGetDogsQueryKey, useDeleteAnimal } from 'http/generated/animals/animals';
import { CreateAnimal201, CreateAnimal201Sex, CreateAnimal201Species } from 'http/generated/api.schemas';
import { queryClient } from 'lib/react-query';
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
  animal: CreateAnimal201;
};

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { isLoggedIn } = useAppContext();
  const { openSnackbar } = useSnackbarContext();

  const [openAnimalForm, setOpenAnimalForm] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [showAnimalInfo, setShowAnimalInfo] = useState(false);

  const male = animal.sex === CreateAnimal201Sex.MALE;

  const { mutate: deleteAnimal, isPending } = useDeleteAnimal({
    mutation: {
      onSuccess: () => {
        if (animal.species === CreateAnimal201Species.DOG) {
          queryClient.setQueryData<CreateAnimal201[]>(getGetDogsQueryKey(), (state = []) => {
            return state.filter((dog) => dog.id !== animal.id);
          });
        } else {
          queryClient.setQueryData<CreateAnimal201[]>(getGetCatsQueryKey(), (state = []) => {
            return state.filter((cat) => cat.id !== animal.id);
          });
        }
        setOpenConfirmDelete(false);
        openSnackbar({ message: 'Animal excluído com sucesso!' });
      },
      onError: (error) => {
        openSnackbar({ message: error.message, error: true });
      },
    },
  });

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
        isLoading={isPending}
        onConfirm={() => deleteAnimal({ id: animal.id })}
        onClose={() => setOpenConfirmDelete(false)}
      />
    </>
  );
};
