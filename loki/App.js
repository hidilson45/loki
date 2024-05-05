import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, ScrollView} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './src/pages/Home'
import {Passwords} from './src/pages/Passwords'

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    
      
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
            <Tab.Screen name="Passwords" component={Passwords} options={{headerShown:false, unmountOnBlur:true}} />
          </Tab.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      
      
   
  );
}
