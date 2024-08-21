export async function fileToDataURI(file: File) {
  const base64 = Buffer.from(await file.arrayBuffer()).toString('base64');
  const dataURI = 'data:' + file.type + ';base64,' + base64;
  return dataURI;
}
