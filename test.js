var CryptoJS = require('crypto-js');
const axios = require('axios');

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(
  'password',
  'encryption_password'
).toString();
//console.log(ciphertext);
// Decrypt
var bytes = CryptoJS.AES.decrypt(ciphertext, 'encryption_password');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

//console.log(originalText); // 'my message'

const testAxios = async () => {
  await axios({
    method: 'post',
    url: 'http://127.0.0.1:8000/api/users/update_user',
    data: {
      name: 'Juan',
      lastname: 'Perez',
    },
    headers: {
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIyMmQwYTgyNDU3ZjA1ZDM1N2NmZDJkIiwiZW1haWwiOiJsZW9uZWtvaGxlckBzdXJmZXUuZGUiLCJpYXQiOjE2NDY1Mjg2NDUsImV4cCI6MTY0NjYxNTA0NX0.NOCd02tGDrIxVOB4xZtGGUD6kyXiUGqRHEyvOsoVIAM',
    },
  })
    .then((resp) => console.log(resp.data))
    .catch((err) => console.log(err));
};

testAxios();
