import { StyleSheet, Text, TextInput, View } from 'react-native';
import Constants from 'expo-constants';
import Navigation from "./navigations/Navigation";



const App = () => {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});

export default App;
