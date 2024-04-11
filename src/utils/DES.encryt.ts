import CryptoJS from "crypto-js";

export function encryptDES(message: string, key: string) {
  const base64Encoded = window.btoa(message);
  const keyWords = CryptoJS.enc.Utf8.parse(key);
  const ivWords = CryptoJS.lib.WordArray.create([0, 0]);
  const encrypted = CryptoJS.DES.encrypt(base64Encoded, keyWords, {
    iv: ivWords,
  });

  return encrypted.toString();
}

export function decryptDES(message: string, key: string) {
  const keyWords = CryptoJS.enc.Utf8.parse(key);
  const ivWords = CryptoJS.lib.WordArray.create([0, 0]);
  const decrypted = CryptoJS.DES.decrypt(message, keyWords, { iv: ivWords });

  return window.atob(decrypted.toString(CryptoJS.enc.Utf8));
}
