export function bufferToDataURI(buffer: Buffer) {
  const base64 = Buffer.from(buffer).toString('base64');
  let dataURI = 'data:' + 'image/jpeg' + ';base64,' + base64;
  return dataURI;
}
