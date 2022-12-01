import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'



  const handleLogin = async (value) => {
    try {
      const response = await axios.post('http://192.168.100.73:3200/login', {
        nip: value.nip,
        password: value.password
      })
      if (response.data.status == 200) {
        console.log('response', response.data)
        // navigation.navigate('Dashboard')
        
        // AsyncStorage.setItem
        // await AsyncStorage.setItem('password', value.password)
        // await AsyncStorage.setItem('nip', value.nip)
        // await AsyncStorage.setItem('name', response.data.data.nama)
      }
    } catch (error) {
      console.log(error.message)
    }
  }


  const Login = () => {
    const [Visible, setVisible] = useState(true);
    const navigation = useNavigation();
    const [nip, setNip] = useState("999");
    const [password, setPassword] = useState("123");
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.icon1}>
            <Icon name='arrow-left' color={'#fff'} size={20} onPress={() => navigation.goBack()} />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                bottom: 1,
                marginLeft: 20,
                marginStart: 100,
                fontFamily: 'Roboto',
                fontStyle: 'normal',
              }} onPress={() => navigation.goBack()}>Sebelumnya</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.well} >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginBottom: 20,
              marginLeft: 20,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: 'bold'
            }}>Wellcome Back</Text>
        </View>

        <View style={styles.user}>
          <Text style={{ color: 'white', marginRight: 230, fontSize: 15, marginBottom: 15 }}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Username"
            placeholderTextColor="white"
            onChangeText={(nip) => setNip(nip)}
            value={nip}
          />
          <Text style={{ color: 'white', marginRight: 230, fontSize: 15, marginBottom: 15 }}>Password</Text>
          <View style={{ flexDirection: 'row-reverse' }}>

            <TouchableOpacity>

            </TouchableOpacity>
            <TextInput
              style={styles.input1}
              placeholder="Enter Your Password"
              secureTextEntry={true}
              placeholderTextColor="white"
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
            <TouchableOpacity
              onPress={() => {
                setVisible(!Visible)
              }}>
              <Icon style={styles.icon} name={show === false ? 'eye-off' : 'eye'} color={'#f1f1f1'} size={25} />
            </TouchableOpacity>
          </View>

          <Text style={{
            color: '#FDCB5A',
            marginLeft: 170,
            fontSize: 15,
            marginBottom: 15,
            textDecorationLine: 'underline'
          }}>Forget Password?</Text>

          <TouchableOpacity style={styles.button} onPress={async() => {
            await handleLogin({ nip, password });
          }}>
            <Text style={styles.textButtom}
              onPress={async () => {
                await handleLogin({ nip, password });
              }}>Submit</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Don't Have An Acccount? Please<Text
            style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: '#FDCB5A' }}
            onPress={() => navigation.navigate('RegisterScreen')}> Sign Up</Text></Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A3150',
    },
    well: {
      marginTop: 50,
      marginStart: 20,
    },
    user: {
      marginTop: 15,
      marginStart: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: 300,
      height: 50,
      borderWidth: 2,
      borderColor: '#749DD2',
      borderRadius: 10,
      color: 'white',
      paddingHorizontal: 20,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input1: {
      width: 300,
      height: 50,
      borderWidth: 2,
      borderColor: '#749DD2',
      borderRadius: 10,
      color: 'white',
      paddingHorizontal: 20,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      left: 20,
    },
    button: {
      flexDirection: 'row',
      width: 300,
      height: 50,
      backgroundColor: '#FDCB5A',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textButtom: {
      color: '#1A3150',
      fontSize: 20,
      fontWeight: 'bold',
      marginRight: 5,
    },
    text: {
      marginTop: 20,
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
    },
    icon: {
      marginTop: 11,
      marginStart: 25,
      left: 260
    },
    icon1: {
      marginTop: 30,
      marginStart: 25,
      // left: 260
      flexDirection: 'row',
    },
    eye: {
      flexDirection: 'row',
    }
  })
  export default Login