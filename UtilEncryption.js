/*
#
#  Created by SoftBank.
#  Copyright (c) 2019 SoftBank Inc. All rights reserved.
#
*/
const UtilEncryption = function(){
  const RANDOM_TOKEN = "randomToken";
  const SECRET_KEY = "4ddfiNfeSfe9vmc3";

  /**
   * @Function encryptionAES
   * @description This function performs AES encryption.
   * @param strData
   *
   */
  const encryptionAES = function(strData) {
    // Convert to MD5 
    var key = createSecretKeyHash(SECRET_KEY);
    var ive = createIve(SECRET_KEY);

    var cipherParams = CryptoJS.AES.encrypt(strData, key, {iv: ive});
    // Encryption
    var myEncryptedText = cipherParams.ciphertext.toString(CryptoJS.enc.Base64);
    console.log('myEncryptedText: ' + myEncryptedText);

    return myEncryptedText;
  };

  /**
   * @Function decryptAES
   * @description This function performs AES decrypt.
   * @param strData
   *
   */
  const decryptAES = function(strData) {
    // Convert to MD5
    var key = createSecretKeyHash(SECRET_KEY);
    var ive = createIve(SECRET_KEY);

    // decrypt
    var cipherParams = CryptoJS.AES.decrypt(strData, key, {iv: ive});
    var decryptedText = cipherParams.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  };

  /**
   * @function createSecretKeyHash
   * @description This function converts the key to MD5.
   * @param secretKey
   *
   */
  const createSecretKeyHash = function(secretKey) {
    return CryptoJS.MD5(secretKey);
  };

  /**
   * @function createIve
   * @description This function creates a IVe and converts it to MD5.
   * @param secretKey
   *
   */
  const createIve = function (secretKey) {
    return CryptoJS.MD5(secretKey + RANDOM_TOKEN);
  };

  return {
    encryptionAES : encryptionAES,
    decryptAES : decryptAES,
  };
}();
