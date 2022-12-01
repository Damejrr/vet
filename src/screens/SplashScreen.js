import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/Logo.png'

const Splashscreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('WellcomeScreen');
  }, 3000);
    return (
    <View style= {styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text
      style={styles.text}>VET</Text>
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
export default Splashscreen