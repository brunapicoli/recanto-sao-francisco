export interface Animal {
  age: number;
  breed: string;
  coat: string;
  color: string;
  description: string;
  entryDate: Date;
  id: number;
  name: string;
  photo: string;
  sex: Sex;
  size: Size;
  species: Species;
}

enum Sex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

enum Species {
  CAT = 'CAT',
  DOG = 'DOG',
}
