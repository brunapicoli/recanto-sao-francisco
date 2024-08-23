import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

export const InputAge = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="age"
      rules={{
        pattern: /^\d+$/,
        required: 'A idade é obrigatória.',
      }}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!errors.age}
          helperText={errors.age?.type === 'pattern' ? 'Idade inválida.' : (errors.age?.message as string) || ' '}
          label="Idade"
          margin="dense"
        />
      )}
    />
  );
};
