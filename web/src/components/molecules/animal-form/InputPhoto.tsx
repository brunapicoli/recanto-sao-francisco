import { ChangeEvent, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ImageUp } from 'lucide-react';
import { InputAdornment, TextField } from '@mui/material';

type InputPhotoProps = {
  required: boolean;
};

const ACCEPTED_FILE_TYPES = 'image/jpg, image/png, image/jpeg';

export const InputPhoto = ({ required }: InputPhotoProps) => {
  const {
    control,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useFormContext();

  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const photoValue = watch('photo');

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const isValidType = ACCEPTED_FILE_TYPES.replace(/\s/g, '').split(',').includes(file.type);
      if (isValidType) {
        setValue('photo', file);
        trigger();
      } else {
        alert('O arquivo selecionado é invalido. Selecione arquivos no formato jpg, jpeg ou png.');
      }
    }
    if (inputFileRef.current) {
      inputFileRef.current.value = '';
    }
  };

  return (
    <Controller
      control={control}
      name="photo"
      rules={{
        required: required ? 'A foto é obrigatória.' : false,
      }}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            error={!!errors.photo}
            fullWidth
            helperText={(errors.photo?.message as string) || ' '}
            margin="dense"
            id="photo"
            label="Foto"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ImageUp />
                </InputAdornment>
              ),
              readOnly: true,
              style: { cursor: 'pointer' },
              onClick: () => inputFileRef?.current?.click(),
            }}
            inputProps={{
              style: { cursor: 'pointer', textOverflow: 'ellipsis' },
            }}
            value={photoValue?.name || ''}
            focused={false}
          />
          <input
            type="file"
            ref={inputFileRef}
            accept={ACCEPTED_FILE_TYPES}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      )}
    />
  );
};
