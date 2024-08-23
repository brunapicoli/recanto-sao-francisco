import { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import { Backdrop, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';
import { useAppContext } from 'context/AppContext';
import { useSnackbarContext } from 'context/SnackbarContext';
import { Animal, AnimalFormData, Size, Species } from 'models/Animals';
import { Sex } from 'models/Sex';
import { AnimalService } from 'services/AnimalService';
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
  animal?: Animal;
  species: Species;
  onClose: () => void;
};

export const AnimalForm = ({ animal, species, open, onClose }: AnimalFormProps) => {
  const { setCats, setDogs } = useAppContext();
  const { openSnackbar } = useSnackbarContext();

  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    ...animal,
    photo: undefined,
    sex: animal?.sex || ('' as Sex),
    size: animal?.size || ('' as Size),
  };

  const methods = useForm<AnimalFormData>({
    defaultValues,
  });

  const { isDirty, isSubmitSuccessful } = methods.formState;

  const handleCancel = () => {
    methods.reset(defaultValues);
    onClose();
  };

  const onSubmit: SubmitHandler<AnimalFormData> = async (data) => {
    if (
      isDirty ||
      methods.getValues('entryDate') !== defaultValues.entryDate ||
      methods.getValues('photo') !== defaultValues.photo
    ) {
      try {
        setIsLoading(true);
        if (animal) {
          await AnimalService.updateAnimal(animal.id, data);
        } else {
          await AnimalService.createAnimal({ ...data, species });
        }
        if (species === Species.CAT) {
          const updatedCats = await AnimalService.getCats();
          setCats(updatedCats);
        } else {
          const updatedDogs = await AnimalService.getDogs();
          setDogs(updatedDogs);
        }
        onClose();
        openSnackbar({ message: 'Animal salvo com sucesso' });
      } catch (error) {
        let errorMessage = 'Erro ao salvar animal.';
        if (error instanceof AxiosError && error.response?.data?.message) {
          errorMessage = errorMessage + ' ' + error.response?.data?.message;
        }
        openSnackbar({ message: errorMessage, error: true });
      } finally {
        setIsLoading(false);
      }
    } else {
      onClose();
    }
  };

  useEffect(() => {
    methods.reset(defaultValues);
  }, [animal]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      methods.reset(defaultValues);
    }
  }, [methods.formState]);

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
