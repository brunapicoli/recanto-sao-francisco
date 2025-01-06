import { useEffect } from 'react';
import { useSnackbarContext } from 'context/SnackbarContext';
import { useGetDogs } from 'http/generated/animals/animals';
import { CreateAnimal201Species } from 'http/generated/api.schemas';
import { Animals } from '../Animals';

export const Dogs = () => {
  const { data: dogs, isError } = useGetDogs();
  const { openSnackbar } = useSnackbarContext();

  useEffect(() => {
    if (isError) {
      openSnackbar({ message: 'Ocorreu um erro ao listar os cães', error: true });
    }
  }, [isError]);

  return <Animals animals={dogs} species={CreateAnimal201Species.DOG} />;
};
