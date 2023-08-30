import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Clipboard, TouchableOpacity, Alert } from 'react-native';
import { encryptText, decryptText, exportToFile, copyToClipboard, resetFields } from './utils';
import {styles} from './styles/Style'

const EncDncApplication = () => {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [userKey, setUserKey] = useState('');
  const keyAsNumber = parseInt(userKey, 10);

const handleEncrypt = () => {
  const encrypted = encryptText(inputText, keyAsNumber);
  setEncryptedText(encrypted);
};

const handleDecrypt = () => {
  const decrypted = decryptText(encryptedText, keyAsNumber);
  setDecryptedText(decrypted);
};
  
  return (
   <View style={{ flex: 1 }}>
     <View style={styles.appBar}>
       <Text style={styles.appBarTitle}>EncDncApplication</Text>
     </View>

    <View style={styles.container}>

      <TextInput
        style={styles.inputText}
        placeholder="Enter text"
        value={inputText}
        onChangeText={setInputText}
        multiline={true}
      />

       <TextInput
        style={styles.userKey}
        placeholder="Enter Key"
        value={userKey}
        onChangeText={setUserKey}
      />

      <View style={styles.buttonContainer}>
        <Button title="Encrypt" onPress={handleEncrypt} />
        <Button title="Decrypt" onPress={handleDecrypt} />
      </View>

      <View style={styles.resultContainer}>

        <Text style={styles.resultText}>Encrypted Text:</Text>
        <Text style={styles.resultValue}>{encryptedText}</Text>

        <TouchableOpacity onPress={() => copyToClipboard(encryptedText)} style={styles.copyButton}>
          <Text style={styles.copyButtonText}>Copy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => exportToFile(encryptedText, 'encrypted.txt')} style={styles.exportButton}>
          <Text style={styles.exportButtonText}>Export</Text>
        </TouchableOpacity>

        <Text style={styles.resultText}>Decrypted Text:</Text>
        <Text style={styles.resultValue}>{decryptedText}</Text>

        <TouchableOpacity onPress={() => copyToClipboard(decryptedText)} style={styles.copyButton}>
          <Text style={styles.copyButtonText}>Copy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => exportToFile(decryptedText, 'decrypted.txt')} style={styles.exportButton}>
          <Text style={styles.exportButtonText}>Export</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => resetFields(setInputText, setEncryptedText, setDecryptedText)} style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset All</Text>
        </TouchableOpacity>

      </View>
    </View>
    </View>
  );
};
export default EncDncApplication;