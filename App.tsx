import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/login';
import SignupScreen from './src/screens/signup';
import WelcomeScreen from './src/screens/welcome';
import HomeScreen from './src/screens/home';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={SignupScreen}/>
      </Stack.Navigator>      
    </NavigationContainer>
    
  );
}
export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
