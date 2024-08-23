import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

export const TextareaDescription = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="description"
      rules={{
        required: 'A descrição é obrigatória.',
      }}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!errors.description}
          fullWidth
          helperText={(errors.description?.message as string) || ' '}
          label="Descrição"
          margin="dense"
          multiline
          inputProps={{
            maxlength: 275,
          }}
        />
      )}
    />
  );
};
