import { Sex } from './Animals';

export interface Director {
  name: string;
  position: string;
  electedIn: string;
  mandateExpiration: string;
  sex: Sex;
}
