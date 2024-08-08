import axios from 'axios';
import { Animal } from 'models/Animals';
import { parseCSV } from 'utils/CSVUtil';

const columnConverter: { [key: string]: keyof Animal } = {
  Entrada: 'entryDate',
  Descrição: 'description',
  Foto: 'photo',
  Idade: 'age',
  Nome: 'name',
  Porte: 'size',
  Sexo: 'sex',
};

export const AnimalService = {
  getCats: async () => {
    const response = await axios.get(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSDu3rxHI_s5wrLB3VCNRjsT51G9Uhe4GsSWjegHsIaNKWmSgxHg-ol-FJMi416DuTK7ujEuIF_EO5D/pub?gid=1588852936&single=true&output=csv'
    );
    const cats = await parseCSV<Animal>(response.data, columnConverter);
    return cats;
  },

  getDogs: async () => {
    const response = await axios.get(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSDu3rxHI_s5wrLB3VCNRjsT51G9Uhe4GsSWjegHsIaNKWmSgxHg-ol-FJMi416DuTK7ujEuIF_EO5D/pub?output=csv'
    );
    const dogs = await parseCSV<Animal>(response.data, columnConverter);
    return dogs;
  },
};
