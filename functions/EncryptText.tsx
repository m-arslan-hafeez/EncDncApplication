const encryptText = (inputText: string, inputKey: number): string => {
    const encrypted = inputText
      .split('')
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 1 - inputKey))
      .join('');
    return encrypted;
  };
  
  export default encryptText;
  