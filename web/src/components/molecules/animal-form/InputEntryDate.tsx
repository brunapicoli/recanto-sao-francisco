import { MouseEvent, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CalendarDays } from 'lucide-react';
import { InputAdornment, TextField } from '@mui/material';
import { formatDateToMonthYear, stringToDate } from 'utils/DateUtil';
import { CalendarMonth } from 'modals/calendar-month/CalendarMonth';

export const InputEntryDate = () => {
  const [inputAnchor, setInputAnchor] = useState<null | HTMLElement>(null);
  const [openCalendar, setOpenCalendar] = useState(false);

  const {
    control,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useFormContext();

  const dateValue = watch('entryDate');

  const handleDateChange = (date: string) => {
    setValue('entryDate', date);
    trigger('entryDate');
  };

  const handleOpenCalendar = (event: MouseEvent<HTMLInputElement>) => {
    setInputAnchor(event.currentTarget);
    setOpenCalendar(true);
  };

  return (
    <>
      <Controller
        control={control}
        name="entryDate"
        rules={{
          required: 'A data de entrada é obrigatória.',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.entryDate}
            focused={false}
            fullWidth
            helperText={(errors.entryDate?.message as string) || ' '}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarDays />
                </InputAdornment>
              ),
              readOnly: true,
              style: { cursor: 'pointer' },
              onClick: handleOpenCalendar,
            }}
            inputProps={{
              style: { cursor: 'pointer' },
            }}
            label="Data de entrada"
            margin="dense"
            value={dateValue ? formatDateToMonthYear(stringToDate(dateValue)) : ''}
          />
        )}
      />
      <CalendarMonth
        anchor={inputAnchor}
        open={openCalendar}
        value={dateValue}
        onClose={() => setOpenCalendar(false)}
        onDateChange={handleDateChange}
      />
    </>
  );
};
