import { CreateAnimal201Sex, CreateAnimal201Size } from 'http/generated/api.schemas';

export const sexOptions = {
  [CreateAnimal201Sex.FEMALE]: 'Fêmea',
  [CreateAnimal201Sex.MALE]: 'Macho',
};

export const sizeOptions = {
  [CreateAnimal201Size.LARGE]: 'Grande',
  [CreateAnimal201Size.MEDIUM]: 'Médio',
  [CreateAnimal201Size.SMALL]: 'Pequeno',
};

export const getSizeText = (animalSize: CreateAnimal201Size) => {
  switch (animalSize) {
    case CreateAnimal201Size.SMALL:
      return 'pequeno';
    case CreateAnimal201Size.MEDIUM:
      return 'médio';
    default:
      return 'grande';
  }
};
