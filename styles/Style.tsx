import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    appBar: {
      backgroundColor: '#007bff', // You can change the color
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginTop: 18,
      padding: 18,
      alignContent: 'center',
    },
    appBarTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      alignContent: 'center',
    },
    container: {
      flex: 2,
      padding: 10,
      marginTop: 30,
    },
    inputText: {
      width: '100%',
      borderWidth: 4,
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
      minHeight: 100,
    },
    userKey: {
      width: '50%',
      borderWidth: 4,
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
      minHeight: 50,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      width: '50%',
    },
    resultContainer: {
      width: '100%',
    },
    resultText: {
      fontWeight: 'bold',
      marginTop: 10,
    },
    resultValue: {
      marginBottom: 10,
    },
    copyButton: {
      backgroundColor: '#007bff',
      paddingVertical: 5,
      paddingHorizontal: 140,
      borderRadius: 15,
      marginRight: 8,
    },
    copyButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    exportButton: {
      backgroundColor: '#28a745',
      paddingVertical: 5,
      paddingHorizontal: 140,
      borderRadius: 15,
    },
    exportButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    resetButton: {
      backgroundColor: 'red',
      paddingVertical: 5,
      paddingHorizontal: 140,
      borderRadius: 15,
    },
    resetButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });