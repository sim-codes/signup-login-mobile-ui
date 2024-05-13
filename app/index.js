import { ImageBackground, StyleSheet,
  TouchableOpacity, Text, View } from 'react-native';

export default function Index({ navigation }) {
    return (
      <ImageBackground source={require("../assets/bg-egg.png")} style={styles.container}>
        <View style={styles.innerCtn}>
          <Text style={styles.title}>FoodHub</Text>
          <Text style={styles.text}>Discover The Best Dishes</Text>
          <Text style={styles.text}>Just for your satisfaction!</Text>

          

          <View style={styles.buttonCtn}>
            <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  innerCtn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 200,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  signUpBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 150,
    backgroundColor: '#FCB001',
    borderRadius: 10,
  },
  signInBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 150,
    backgroundColor: 'transparent',
    borderColor: '#FCB001',
    borderWidth: 2,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonCtn: {
    marginTop: 50,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
})
