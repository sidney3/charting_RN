import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CTCharts from './src/components/CTCharts'

export default function App() {
  console.log("hello!")
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! AA</Text>
      <CTCharts/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
