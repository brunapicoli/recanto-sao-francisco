export interface Animal {
  id: number;
  age: number;
  description: string;
  entryDate: string;
  name: string;
  photo: string;
  sex: Sex;
  size: Size;
}

export enum Sex {
  MALE = 'M',
  FEMALE = 'F',
}

export enum Size {
  SMALL = 'Pequeno',
  MEDIUM = 'Médio',
  LARGE = 'Grande',
}
