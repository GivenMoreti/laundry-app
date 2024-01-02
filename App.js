import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
import NavTabs from './screens/Navigation/NavTabs';

export default function App() {
  return (
    <Provider style={styles.container} store={Store}>
      <NavTabs />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
