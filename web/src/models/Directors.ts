export enum Sex {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export interface Director {
  name: string;
  position: string;
  electedIn: string;
  mandateExpiration: string;
  sex: Sex;
}
