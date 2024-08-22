import { Sex } from './Sex';

export interface Director {
  name: string;
  position: string;
  electedIn: string;
  mandateExpiration: string;
  sex: Sex;
}
