import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './app/index';
import Signup from './app/signup';
import SignIn from './app/signin';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // Wrap the entire app in the NavigationContainer component
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} 
        options={{
          // Set the headerTitle to an empty string to hide the header
          headerTitle: "", headerTransparent: true
          }} />
        <Stack.Screen name="Login" component={SignIn} 
        options={{
          // Set the headerTitle to an empty string to hide the header
          headerTitle: "", headerTransparent: true
          }}/>
        <Stack.Screen name="Signup" component={Signup} 
        options={{
          // Set the headerTitle to an empty string to hide the header
          headerTitle: "", headerTransparent: true
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
