const resetFields = (
    setInputText: React.Dispatch<React.SetStateAction<string>>,
    setEncryptedText: React.Dispatch<React.SetStateAction<string>>,
    setDecryptedText: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    setInputText('');
    setEncryptedText('');
    setDecryptedText('');
  };
  
  export default resetFields;
  