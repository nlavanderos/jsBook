//PATTERN MATCHING

import CryptoJS from "crypto-js";

const OBJ = `{"uri":"www.google.com"}`
var encrypted = CryptoJS.AES.encrypt(OBJ, "Secret Passphrase");

var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase").toString(CryptoJS.enc.Utf8);


console.log(JSON.parse(decrypted).uri)
//www.google.com