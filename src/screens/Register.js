import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'


const Register = () => {
  const navigation = useNavigation();
  const [Show, setShow] = React.useState(false);
  const [Visible, setVisible] = React.useState(true);
  return (
    <View style= {styles.container}>
      <View>
      <TouchableOpacity style={styles.icon}>
      <Icon name='arrow-left' color={'#fff'} size={20} onPress={()=> navigation.goBack()}/>
      <Text
      style={{
        color: 'white',
        fontSize: 20,
        bottom: 4,
        marginLeft: 20,
        marginStart: 100,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
      }}onPress={()=> navigation.goBack()}>Sebelumnya</Text>
      </TouchableOpacity>
      </View>

      <View style= {styles.well} >
      <Text
      style={{
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold'
      }}>Buat Akun Baru</Text>
      </View>
      
      <View style= {styles.user}>
        <Text style={{color: 'white',marginRight:230, fontSize: 15, marginBottom:15}}>Username</Text>
        <TextInput 
        style={styles.input}
        placeholder="Enter Your Username"
        placeholderTextColor="white"
        />
        <Text style={{color: 'white',marginRight:200, fontSize: 15, marginBottom:15}}>Phone Number</Text>
        <TextInput 
        style={styles.input}
        placeholder="Enter Your Phone Number"
        placeholderTextColor="white"
        />
        <Text style={{color: 'white',marginRight:230, fontSize: 15, marginBottom:15}}>Password</Text>
        <View style={{flexDirection:'row-reverse'}}>
        <TextInput 
        style={styles.input1}
        placeholder="Enter Your Password"
        secureTextEntry={Visible}
        placeholderTextColor="white"
        />
        <TouchableOpacity 
        onPress={() => {
          setVisible(!Visible)
          setShow(!Show);
        }}> 
          <Icon style={styles.icon1} name={Show === false ? 'eye-off' : 'eye'} color={'#f1f1f1'} size={25} />
        </TouchableOpacity>
        </View>
       
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('LoginScreen')}>
          <Text style={styles.textButtom}
          onPress={()=> navigation.navigate('LoginScreen')}>Submit</Text>
           
        </TouchableOpacity>
        <Text style={styles.text}>Already Have An Acccount? Please <Text 
        style={{ fontWeight:'bold',textDecorationLine: 'underline', color: '#FDCB5A'}} 
        onPress={()=> navigation.navigate('LoginScreen')}> Sign In</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1A3150',
  },
  well:{
    marginTop: 50,
    marginStart: 20,
  },
  user:{
    marginTop: 15,
    marginStart: 3,
    justifyContent: 'center',
    alignItems:'center',
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
    start:25
  },
  button:{
    flexDirection: 'row',
    width: 300,
    height: 50,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtom:{
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
  icon:{
    flexDirection: 'row',
    marginTop:50,
    marginStart: 25
  },
  icon1:{
      marginTop:11,
      marginStart: 25,
      left: 260
  },
  eye:{
    flexDirection: 'row',
  }
})
export default Register
