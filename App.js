import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View } from 'react-native'; 
import Constants from 'expo-constants';

// import Apostila03 from './components/apostila_03/index';
// import Apostila03A from './components/apostila_03_avancado';
import Apostila04_exerc from './components/apostila_04_exerc';

let corApp = '#000';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila04_exerc />
      <StatusBar style= {corApp === '#000' ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: corApp,
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});
