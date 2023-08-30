import * as FileSystem from 'expo-file-system';
import { Share } from 'react-native';

const exportToFile = async (text: string, fileName: string): Promise<void> => {
  const filePath = FileSystem.documentDirectory + fileName;
  await FileSystem.writeAsStringAsync(filePath, text);
  Share.share({
    url: `file://${filePath}`,
    title: 'OutputFile',
    message: 'Check out this file:',
  });
};

export default exportToFile;
