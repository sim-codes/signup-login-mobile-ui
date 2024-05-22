import { useState } from 'react'; 
import { TextInput, StyleSheet,
    TouchableOpacity, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
  
export default function SignIn({ navigation }) {
    // State variable to hold the password 
    const [password, setPassword] = useState('');
  
    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword); 
    };

      return (
        <View style={styles.container}>

            <Text style={styles.title}>Sign in to continue...</Text>

            <View style={styles.inpCtn}>
                <TextInput style={styles.input} placeholder='Email'/>

                <View style={styles.pwdCtn}>
                    <TextInput style={styles.password}
                        // Set secureTextEntry prop to hide  
                        //password when showPassword is false
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry={!showPassword} 
                    placeholder='Enter Password'/>
                    <MaterialCommunityIcons 
                        name={showPassword ? 'eye-off' : 'eye'} 
                        size={24} 
                        color="#aaa"
                        onPress={toggleShowPassword} 
                    /> 
                </View>
            </View>
  
            <TouchableOpacity style={styles.signIpBtn}>
              <Text style={styles.sign}>Sign In</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'column', justifyContent: 'center', margin: 20}}>
                <Text style={styles.text}>Or signin with</Text>

                {/* Social Media Icons */}
                <View style={{flexDirection: 'row', justifyContent: 'center', gap: 30, margin: 20}}>
                    <Image source={require('../assets/g.png')} style={styles.icon} />
                    <Image source={require('../assets/x.png')} style={styles.icon} />
                    <Image source={require('../assets/f.png')} style={styles.icon} />
                </View>
            </View>

            {/* Navigation to the signup page */}
            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 5, margin: 20}}>
                <Text style={styles.text}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.span}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      padding: 30,
      justifyContent: 'center',
    },
    signIpBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      width: '100%',
      backgroundColor: '#FCB001',
      borderRadius: 10,
      marginTop: 30,
    },
    title: {
      color: 'black',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 50,
    },
    sign: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
    text: {
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    span: {
        color: '#FCB001',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
    inpCtn: {
        gap: 30,
        marginBottom: 20,
    },
    input: {
        height: 60,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#D3D3D3',
        borderWidth: 2,
        padding: 15,
        fontSize: 20,
    },
    pwdCtn: {
        alignItems: 'center',
        height: 60,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#D3D3D3',
        borderWidth: 2,
        fontSize: 20,
    },
    password: {
        width: '90%',
        padding: 10,
        fontSize: 20,
    },
    icon: {
        width: 30,
        height: 30,
    },
  })
  