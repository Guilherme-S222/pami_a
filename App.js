import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View } from 'react-native'; 

// import Apostila03 from './components/apostila_03/index';
// import Apostila03A from './components/apostila_03_avancado';
import Apostila04 from './components/apostila_04';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila04 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
