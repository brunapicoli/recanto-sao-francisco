import { useEffect } from 'react';
import { useSnackbarContext } from 'context/SnackbarContext';
import { useGetCats } from 'http/generated/animals/animals';
import { CreateAnimal201Species } from 'http/generated/api.schemas';
import { Animals } from '../Animals';

export const Cats = () => {
  const { data: cats, isError } = useGetCats();
  const { openSnackbar } = useSnackbarContext();

  useEffect(() => {
    if (isError) {
      openSnackbar({ message: 'Ocorreu um erro ao listar os gatos', error: true });
    }
  }, [isError]);

  return <Animals animals={cats} species={CreateAnimal201Species.CAT} />;
};
