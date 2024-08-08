import Papa from 'papaparse';

interface GoogleSheetData {
  [key: string]: string;
}

const transformSheetData = <T extends { photo: string }>(
  data: GoogleSheetData[],
  columnConverter: { [key: string]: keyof T }
) => {
  return data.map((row, index) => {
    const transformedRow = Object.entries(row).reduce((newData, [key, value]) => {
      const newKey = columnConverter[key];
      (newData as any)[newKey] = value;
      return newData;
    }, {} as T);

    return {
      ...transformedRow,
      id: index + 1,
    } as T;
  });
};

export const parseCSV = <T extends { photo: string }>(
  csvData: string,
  columnConverter: { [key: string]: keyof T }
): Promise<T[]> => {
  return new Promise<T[]>((resolve) => {
    Papa.parse<GoogleSheetData>(csvData, {
      header: true,
      complete: (result) => {
        const transformedData = transformSheetData(result.data, columnConverter);
        resolve(transformedData);
      },
    });
  });
};
