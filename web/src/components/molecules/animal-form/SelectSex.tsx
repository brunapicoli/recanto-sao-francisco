import { Controller, useFormContext } from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';
import { sexOptions } from 'utils/AnimalUtil';

export const SelectSex = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="sex"
      rules={{
        required: 'O sexo é obrigatório.',
      }}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!errors.sex}
          fullWidth
          helperText={(errors.sex?.message as string) || ' '}
          label="Sexo"
          margin="dense"
          select
        >
          {Object.entries(sexOptions).map(([key, value]) => (
            <MenuItem key={key} value={key}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
