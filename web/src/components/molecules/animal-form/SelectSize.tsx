import { Controller, useFormContext } from 'react-hook-form';
import { MenuItem, TextField } from '@mui/material';
import { sizeOptions } from 'utils/AnimalUtil';

export const SelectSize = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="size"
      rules={{
        required: 'O porte é obrigatório.',
      }}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!errors.size}
          fullWidth
          helperText={(errors.size?.message as string) || ' '}
          label="Porte"
          margin="dense"
          select
        >
          {Object.entries(sizeOptions).map(([key, value]) => (
            <MenuItem key={key} value={key}>
              {value}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
