import axios from 'axios';
import { Director } from 'models/Directors';
import { parseCSV } from 'utils/CSVUtil';

const columnConverter: { [key: string]: keyof Director } = {
  Nome: 'name',
  Cargo: 'position',
  Foto: 'photo',
};

export const DirectorService = {
  getDirectors: async () => {
    const response = await axios.get(
      'https://docs.google.com/spreadsheets/d/15G2rpXk3d5GazJbOXm4pm0Q3TPt3R_prOf5RqRoTRIM/pub?output=csv'
    );
    const directors = await parseCSV<Director>(response.data, columnConverter);
    return directors;
  },
};
