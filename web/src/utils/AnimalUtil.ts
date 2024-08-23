import { Size } from 'models/Animals';
import { Sex } from 'models/Sex';

export const sexOptions = {
  [Sex.FEMALE]: 'Fêmea',
  [Sex.MALE]: 'Macho',
};

export const sizeOptions = {
  [Size.LARGE]: 'Grande',
  [Size.MEDIUM]: 'Médio',
  [Size.SMALL]: 'Pequeno',
};

export const getSizeText = (animalSize: Size) => {
  switch (animalSize) {
    case Size.SMALL:
      return 'pequeno';
    case Size.MEDIUM:
      return 'médio';
    default:
      return 'grande';
  }
};
