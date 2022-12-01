import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

const Tulispesan = () => {
    const navigation = useNavigation();
  return (
    <View style= {styles.container}>
  <View style={styles.atas}>
      <TouchableOpacity style={styles.icon1}>
      <Icon name='arrow-left' color={'#fff'} size={20} onPress={()=> navigation.goBack()}/>
      <Text
      style={{
        color: 'white',
        fontSize: 20,
        bottom: 5,
        marginLeft: 20,
        marginStart: 100,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
      }}onPress={()=> navigation.goBack()}>Sebelumnya</Text>
      </TouchableOpacity>
      </View>
  
  <View>
  <View style={{
        position: 'relative',
        marginVertical: 3,
        justifyContent: 'center',
        top: 580
       }}>
      <TextInput
        style={{
        backgroundColor: '#F1F1F1',
        width: 370,
        height: 40,
        left: 12,
        padding: 1.5,
        borderRadius: 6,
        color: '#000',
        fontSize: 17,
        paddingLeft: 30
        }}
         placeholder='Type your message here'
         placeholderTextColor={'#CACACA'}
        />
        <Icon
          style={{
           position: 'absolute',
            left: 340,
            bottom:10
           }} onPress={()=> navigation.navigate('Pesan')}
            size={22}
            color={'#CACACA'}
            name='send'
          />
          </View>
  </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
      },
      background: {
        flex: 1,
        position: 'absolute',
        width: 400,
        height: 90,
      },
      icon:{
        flexDirection: 'row',
        marginTop:35,
        marginStart: 25
      },
      icon1:{
        flexDirection: 'row',
        marginTop:20,
        marginStart: 25
      },
      atas:{
        backgroundColor:'#1A3150',
        height:50
      },
})
export default Tulispesan