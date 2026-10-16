import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
    privateKey: "private_Qfdh43dmSA+kjuXSxQ7bU7VwB7E="

});
async function uploadFile(buffer){
const response = await client.files.upload({
    file: buffer.toString('base64'),
    fileName: 'image.jpg',
});
  return response
}
export default uploadFile
