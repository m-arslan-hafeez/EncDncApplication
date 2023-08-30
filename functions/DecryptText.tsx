const decryptText = (encryptedText: string, inputKey: number): string => {
    const decrypted = encryptedText
      .split('')
      .map((char) => String.fromCharCode(char.charCodeAt(0) - 1 + inputKey))
      .join('');
    return decrypted;
  };
  
  export default decryptText;
  