import Resizer from 'react-image-file-resizer';

export const getResizeFile = async (file: File): Promise<File> => {
  try {
    const resizedFile: any = await new Promise((resolve) => {
      Resizer.imageFileResizer(file, 1024, 768, 'JPEG', 100, 0, (uri) => resolve(uri), 'blob');
    });
    return new File([resizedFile], file.name, {
      ...file,
      type: 'image/jpeg',
    });
  } catch (error) {
    return file;
  }
};
