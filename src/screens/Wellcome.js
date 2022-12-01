import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Logo from '../assets/Logo.png'

const Wellcome = () => {
  const navigation = useNavigation();
  return (
    <View style= {styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text
      style={styles.text}>VET</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('LoginScreen')}>
        <Text style={styles.textButtom}
          onPress={()=> navigation.navigate('LoginScreen')}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate('RegisterScreen')}>
        <Text style={styles.textButtom1}
          onPress={()=> navigation.navigate('RegisterScreen')}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1A3150',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    flexDirection: 'row',
    marginTop:250,
    width: 300,
    height: 50,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1:{
    marginTop:20,
    flexDirection: 'row',
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtom:{
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  textButtom1:{
    color: '#875C25',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  logo:{
    width: 193.63,
    height: 77.19,
    top: 200,
    position: 'absolute',
  },
  text:{
    position: 'absolute',
    width: 55,
    height: 36,
    left:168,
    top: 290,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight:'700',
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 3,
    textAlign: 'center',
    color: '#FDCB5A',
  }
})
export default Wellcome