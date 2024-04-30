import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, ScrollView} from 'react-native';
import Home from './src/pages/Home'
export default function App() {
  return (
    <View className="flex m-10">
      <ScrollView>
        <Home/>
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}
