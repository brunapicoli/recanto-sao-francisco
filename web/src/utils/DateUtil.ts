export const formatDateToMonthYear = (date: Date) => {
  const monthYear = date
    .toLocaleString('pt-BR', {
      month: 'long',
      year: 'numeric',
    })
    .split(' ');
  const month = monthYear[0].charAt(0).toUpperCase() + monthYear[0].slice(1).toLowerCase();
  const year = monthYear[2];
  return `${month} de ${year}`;
};

export const formatDateToYearMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};

export const formatMonthToShort = (date: Date) => {
  const month: string = date.toLocaleString('pt-BR', { month: 'short' });
  return month.charAt(0).toUpperCase() + month.slice(1, 3).toLowerCase();
};

/**
 * @param date date in format YYYY-MM
 */
export const stringToDate = (date: string) => {
  const [year, month] = date.split('-').map(Number);
  return new Date(year, month - 1);
};
