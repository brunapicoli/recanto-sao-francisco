import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Backdrop, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';
import { useSnackbarContext } from 'context/SnackbarContext';
import {
  getGetCatsQueryKey,
  getGetDogsQueryKey,
  useCreateAnimal,
  useUpdateAnimal,
} from 'http/generated/animals/animals';
import { CreateAnimal201, CreateAnimal201Species, CreateAnimalBody } from 'http/generated/api.schemas';
import { queryClient } from 'lib/react-query';
import { Button } from 'components/atoms/button/Button';
import { InputAge } from 'components/molecules/animal-form/InputAge';
import { InputEntryDate } from 'components/molecules/animal-form/InputEntryDate';
import { InputName } from 'components/molecules/animal-form/InputName';
import { InputPhoto } from 'components/molecules/animal-form/InputPhoto';
import { SelectSex } from 'components/molecules/animal-form/SelectSex';
import { SelectSize } from 'components/molecules/animal-form/SelectSize';
import { TextareaDescription } from 'components/molecules/animal-form/TextareaDescription';
import { AnimalFormColumn, AnimalFormRow } from './style';

type AnimalFormProps = DialogProps & {
  animal?: CreateAnimal201;
  species: CreateAnimal201Species;
  onClose: () => void;
};

export const AnimalForm = ({ animal, species, open, onClose }: AnimalFormProps) => {
  const { mutate: createAnimal, isPending: isCreatePending } = useCreateAnimal({
    mutation: {
      onSuccess: (data) => {
        if (species === CreateAnimal201Species.DOG) {
          queryClient.setQueryData<CreateAnimal201[]>(getGetDogsQueryKey(), (state = []) => {
            return [{ ...data }, ...state];
          });
        } else {
          queryClient.setQueryData<CreateAnimal201[]>(getGetCatsQueryKey(), (state = []) => {
            return [{ ...data }, ...state];
          });
        }
        onClose();
        openSnackbar({ message: 'Animal salvo com sucesso' });
        methods.reset(defaultValues);
      },
      onError: (error) => {
        openSnackbar({ message: error.message, error: true });
      },
    },
  });

  const { mutate: updateAnimal, isPending: isUpdatePending } = useUpdateAnimal({
    mutation: {
      onSuccess: (data) => {
        if (species === CreateAnimal201Species.DOG) {
          queryClient.setQueryData<CreateAnimal201[]>(getGetDogsQueryKey(), (state = []) => {
            return state.map((dog) => {
              if (dog.id === data.id) {
                return { ...data };
              }
              return dog;
            });
          });
        } else {
          queryClient.setQueryData<CreateAnimal201[]>(getGetCatsQueryKey(), (state = []) => {
            return state.map((cat) => {
              if (cat.id === data.id) {
                return { ...data };
              }
              return cat;
            });
          });
        }
        onClose();
        openSnackbar({ message: 'Animal salvo com sucesso' });
        methods.reset(defaultValues);
      },
      onError: (error) => {
        openSnackbar({ message: error.message, error: true });
      },
    },
  });

  const { openSnackbar } = useSnackbarContext();

  const isLoading = isCreatePending || isUpdatePending;

  const defaultValues = {
    ...animal,
  };

  const methods = useForm<CreateAnimalBody>({
    defaultValues,
  });

  const { isDirty } = methods.formState;

  const handleCancel = () => {
    methods.reset(defaultValues);
    onClose();
  };

  const onSubmit: SubmitHandler<CreateAnimalBody> = async (data) => {
    if (
      isDirty ||
      methods.getValues('entryDate') !== defaultValues.entryDate ||
      String(methods.getValues('photo')) !== defaultValues.photo
    ) {
      if (animal) {
        updateAnimal({ data, id: animal.id });
      } else {
        createAnimal({ data: { ...data, species } });
      }
    } else {
      onClose();
    }
  };

  useEffect(() => {
    methods.reset(defaultValues);
  }, [animal]);

  return (
    <Dialog open={open} onClose={onClose}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DialogTitle>{animal ? 'Editar animal' : 'Adicionar animal'}</DialogTitle>
          <DialogContent>
            <AnimalFormColumn>
              <AnimalFormRow>
                <InputName />
                <InputAge />
              </AnimalFormRow>
              <TextareaDescription />
              <AnimalFormRow>
                <SelectSex />
                <SelectSize />
              </AnimalFormRow>
              <AnimalFormRow>
                <AnimalFormRow>
                  <InputEntryDate />
                  <InputPhoto required={!animal} />
                </AnimalFormRow>
              </AnimalFormRow>
            </AnimalFormColumn>
          </DialogContent>
          <DialogActions>
            <Button type="button" variant="secondary" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button isLoading={isLoading} type="submit">
              Salvar
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
      <Backdrop open={isLoading} />
    </Dialog>
  );
};
