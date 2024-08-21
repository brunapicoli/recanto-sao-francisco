export interface Animal {
  id: number;
  age: number;
  breed: string;
  coat: string;
  color: string;
  description: string;
  entryDate: string; // YYYY-MM
  name: string;
  photo: string;
  sex: Sex;
  size: Size;
  species: Species;
}

export type AnimalFormData = Omit<Animal, 'id' | 'photo'> & {
  photo: File;
};

export enum Sex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum Species {
  CAT = 'CAT',
  DOG = 'DOG',
}
