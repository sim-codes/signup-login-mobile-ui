import { useState } from 'react'; 
import { TextInput, StyleSheet,
    TouchableOpacity, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
  
export default function Signup({ navigation }) {
    // State variable to hold the password 
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
  
    // State variable to track password visibility 
    const [showPassword1, setShowPassword1] = useState(false); 
    const [showPassword2, setShowPassword2] = useState(false); 

    // Function to toggle the password visibility state 
    const toggleShowPassword1 = () => {
        setShowPassword1(!showPassword1); 
    };

    const toggleShowPassword2 = () => { 
        setShowPassword2(!showPassword2); 
    }; 
      return (
        <View style={styles.container}>

            <Text style={styles.title}>Let's Get Started</Text>

            <View style={styles.inpCtn}>
                <TextInput style={styles.input} placeholder='First Name'/>
                <TextInput style={styles.input} placeholder='Last Name'/>
                <TextInput style={styles.input} placeholder='Email'/>

                <View style={styles.pwdCtn}>
                    <TextInput style={styles.password}
                        // Set secureTextEntry prop to hide  
                        //password when showPassword is false
                        value={password1} 
                        onChangeText={setPassword1} 
                        secureTextEntry={!showPassword1} 
                    placeholder='Create Password'/>
                    <MaterialCommunityIcons 
                        name={showPassword1 ? 'eye-off' : 'eye'} 
                        size={24} 
                        color="#aaa"
                        onPress={toggleShowPassword1} 
                    /> 
                </View>
                <View style={styles.pwdCtn}>
                    <TextInput style={styles.password}
                        // Set secureTextEntry prop to hide  
                        //password when showPassword is false
                        value={password2} 
                        onChangeText={setPassword2} 
                        secureTextEntry={!showPassword2} 
                    placeholder='Type Password again'/>
                    <MaterialCommunityIcons 
                        name={showPassword2 ? 'eye-off' : 'eye'} 
                        size={24} 
                        color="#aaa"
                        onPress={toggleShowPassword2} 
                    /> 
                </View>
            </View>
  
            <TouchableOpacity style={styles.signUpBtn}>
              <Text style={styles.sign}>Create Account</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'column', justifyContent: 'center', margin: 20}}>
                <Text style={styles.text}>Or signup with</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', gap: 30, margin: 20}}>
                    <Image source={require('../assets/g.png')} style={styles.icon} />
                    <Image source={require('../assets/x.png')} style={styles.icon} />
                    <Image source={require('../assets/f.png')} style={styles.icon} />
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 5, margin: 20}}>
                <Text style={styles.text}>Alredy have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.span}>Login</Text>
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
    signUpBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
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
      marginBottom: 90,
    },
    text: {
      color: 'black',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    sign: {
        color: 'white',
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
  