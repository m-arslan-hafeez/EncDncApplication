import { Clipboard, Alert } from 'react-native';

const copyToClipboard = (text: string): void => {
  Clipboard.setString(text);
  Alert.alert('Message', 'Text copied to clipboard.');
};

export default copyToClipboard;
