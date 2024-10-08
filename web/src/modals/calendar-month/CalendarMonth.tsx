import { Value } from 'react-calendar/dist/cjs/shared/types';
import { Popover, PopoverProps } from '@mui/material';
import { formatDateToYearMonth, formatMonthToShort, stringToDate } from 'utils/DateUtil';
import { CalendarContainer } from './style';

type CalendarMonthProps = PopoverProps & {
  anchor: HTMLElement | null;
  value?: string;
  onDateChange: (date: string) => void;
  onClose: () => void;
};

export const CalendarMonth = ({ anchor, value, open, onDateChange, onClose }: CalendarMonthProps) => {
  const initialValue = value ? stringToDate(value) : undefined;

  const handleDateChange = (value: Value) => {
    if (value) {
      const date = value as Date;
      onDateChange(formatDateToYearMonth(date));
    }
    onClose();
  };

  return (
    <Popover
      anchorEl={anchor}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <CalendarContainer
        minDetail="year"
        maxDetail="year"
        locale="pt-BR"
        defaultActiveStartDate={initialValue || new Date()}
        maxDate={new Date()}
        next2Label={null}
        prev2Label={null}
        formatMonth={(_locale, date) => formatMonthToShort(date)}
        value={initialValue}
        onChange={handleDateChange}
      />
    </Popover>
  );
};
