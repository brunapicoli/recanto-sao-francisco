import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

export const InputName = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name="name"
      rules={{
        pattern: /^[a-zA-ZÀ-ÖØ-öø-ÿ]+[-'.\sa-zA-ZÀ-ÖØ-öø-ÿ ]+$/,
        required: 'O nome é obrigatório.',
      }}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!errors.name}
          fullWidth
          helperText={errors.name?.type === 'pattern' ? 'Nome inválido.' : (errors.name?.message as string) || ' '}
          label="Nome"
          margin="dense"
        />
      )}
    />
  );
};
