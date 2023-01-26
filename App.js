import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import styles from './App.scss';
import Movies from './components/Movies';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <SafeAreaView style={styles.container} id='all'>
      <Navbar />
      <ScrollView>
        <Movies />
      </ScrollView>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}