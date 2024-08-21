import { ChangeEvent, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CalendarDays } from 'lucide-react';
import { Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';
import { useAppContext } from 'context/AppContext';
import { Animal, AnimalFormData, Species } from 'models/Animals';
import { AnimalService } from 'services/AnimalService';
import { sexOptions, sizeOptions } from 'utils/AnimalUtil';
import { formatDateToMonthYear, stringToDate } from 'utils/DateUtil';
import { Button } from 'components/atoms/button/Button';
import { CalendarMonth } from 'modals/calendar-month/CalendarMonth';
import { AnimalFormColumn, AnimalFormRow } from './style';

type AnimalFormProps = DialogProps & {
  animal?: Animal;
  species: Species;
  onClose: () => void;
};

export const AnimalForm = ({ animal, species, open, onClose }: AnimalFormProps) => {
  const { setCats, setDogs } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const { control, getValues, handleSubmit, reset, setValue } = useForm<AnimalFormData>({
    defaultValues: {
      age: animal?.age,
      breed: animal?.breed,
      coat: animal?.coat,
      color: animal?.color,
      description: animal?.description,
      entryDate: animal?.entryDate,
      name: animal?.name,
      photo: undefined,
      sex: animal?.sex,
      size: animal?.size,
      species: animal?.species,
    },
  });

  const entryDateValue = getValues('entryDate');

  const fileTypes = 'image/jpg, image/png, image/jpeg';

  const handleCancel = () => {
    reset();
    onClose();
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const isValidType = fileTypes.replace(/\s/g, '').split(',').includes(file.type);

      if (isValidType) {
        setValue('photo', file);
      } else {
        alert('O arquivo selecionado é invalido. Selecione arquivos no formato jpg, jpeg ou png.');
      }
    }
  };

  const onSubmit: SubmitHandler<AnimalFormData> = async (data) => {
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
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{animal ? 'Editar animal' : 'Adicionar animal'}</DialogTitle>
        <DialogContent>
          <AnimalFormColumn>
            <AnimalFormRow>
              <Controller
                name="name"
                control={control}
                rules={{
                  pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+[-'.\sa-zA-ZÀ-ÖØ-öø-ÿ ]+$/,
                  required: true,
                }}
                render={({ field }) => (
                  <TextField {...field} margin="dense" fullWidth id="name" label="Nome" type="text" />
                )}
              />
              <Controller
                name="age"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => <TextField {...field} margin="dense" id="age" label="Idade" type="number" />}
              />
            </AnimalFormRow>
            <Controller
              name="description"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="dense"
                  id="description"
                  label="Descrição"
                  type="text"
                  fullWidth
                  multiline
                />
              )}
            />
            <AnimalFormRow>
              <Controller
                name="sex"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField {...field} fullWidth margin="dense" id="sex" label="Sexo" select>
                    {Object.entries(sexOptions).map(([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <Controller
                name="size"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField {...field} fullWidth margin="dense" id="size" label="Porte" select>
                    {Object.entries(sizeOptions).map(([key, value]) => (
                      <MenuItem key={key} value={key}>
                        {value}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </AnimalFormRow>
            <AnimalFormRow>
              <AnimalFormRow>
                <Controller
                  name="entryDate"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      margin="dense"
                      id="entryDate"
                      label="Data de entrada"
                      onClick={() => setOpenCalendar(true)}
                      InputProps={{
                        endAdornment: <CalendarDays />,
                        readOnly: true,
                      }}
                      inputProps={{
                        style: { cursor: 'pointer' },
                      }}
                      value={entryDateValue ? formatDateToMonthYear(stringToDate(entryDateValue)) : ''}
                    />
                  )}
                />
                <Controller
                  name="photo"
                  control={control}
                  rules={{
                    required: !animal,
                  }}
                  render={() => <input type="file" accept={fileTypes} onChange={handleFileChange} />}
                />
              </AnimalFormRow>
            </AnimalFormRow>
          </AnimalFormColumn>
        </DialogContent>
        <DialogActions>
          <Button text="Cancelar" type="button" onClick={handleCancel} disabled={isLoading} />
          <Button text="Salvar" type="submit" disabled={isLoading} />
        </DialogActions>
      </form>
      <CalendarMonth
        open={openCalendar}
        value={entryDateValue}
        onClose={() => setOpenCalendar(false)}
        onDateChange={(date) => setValue('entryDate', date)}
      />
    </Dialog>
  );
};
