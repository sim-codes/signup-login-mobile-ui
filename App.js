import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './app/index';
import Signup from './app/signup';
import SignIn from './app/signin';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        {/* <View style={styles.container}> */}
        {/* <Index /> */}
        {/* <Signup /> */}
        {/* <SignIn /> */}
        {/* <StatusBar style="auto" /> */}
      {/* </View> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} options={{headerTitle: "", headerTransparent: true}} />
        <Stack.Screen name="Login" component={SignIn} options={{headerTitle: "", headerTransparent: true}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerTitle: "", headerTransparent: true}}/>
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
