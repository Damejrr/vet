import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView  } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Picture from '../assets/rs.jpg'

const Lainnya = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
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

      <Text></Text>
      <View style={{
        position: 'relative',
        marginVertical: 3,
        justifyContent: 'center',
        paddingBottom: 20,
       }}>
      <TextInput
        style={{
        backgroundColor: '#F1F1F1',
        width: 370,
        height: 40,
        left: 12,
        padding: 1.5,
        borderRadius: 2,
        color: '#000',
        fontSize: 17,
        paddingLeft: 30
        }}
         placeholder='Cari Klinik terdekat'
         placeholderTextColor={'#CACACA'}
        />
        <Icon1
          style={{
           position: 'absolute',
            left: 17,
            paddingBottom:21
           }}
            size={22}
            color={'#CACACA'}
            name='search'
          />
          </View>
        <ScrollView>
        <View style={styles.banyak}>
        <Image source={Picture} style={styles.picture}/>
        <Text style={{fontSize: 15, 
          color: '#875C25',
          marginStart:5,
          marginTop: 5}}> 
        Batam </Text>
        <Text style={{fontSize: 20, 
          color: '#000',
          right: 48,
          marginTop: 22,
          fontWeight: 'bold'}}> 
        Klinik Hewan </Text>
        <Text style={{fontSize: 16, 
          color: '#1A3150',
          right: 170,
          marginTop: 45,
          fontWeight: 'bold'}}> 
        Buka: 09.00 - 20.00 </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}
          onPress={()=> navigation.navigate('Dashboard')}>Submit</Text>
           </TouchableOpacity>
      </View>
      
      <View style={styles.banyak1}>
        <Image source={Picture} style={styles.picture}/>
        <Text style={{fontSize: 15, 
          color: '#875C25',
          marginStart:5,
          marginTop: 5}}> 
        Batam </Text>
        <Text style={{fontSize: 20, 
          color: '#000',
          right: 48,
          marginTop: 22,
          fontWeight: 'bold'}}> 
        Klinik Hewan </Text>
        <Text style={{fontSize: 16, 
          color: '#1A3150',
          right: 170,
          marginTop: 45,
          fontWeight: 'bold'}}> 
        Buka: 09.00 - 20.00 </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}
          onPress={()=> navigation.navigate('Dashboard')}>Submit</Text>
           </TouchableOpacity>
      </View>

      <View style={styles.banyak1}>
        <Image source={Picture} style={styles.picture}/>
        <Text style={{fontSize: 15, 
          color: '#875C25',
          marginStart:5,
          marginTop: 5}}> 
        Batam </Text>
        <Text style={{fontSize: 20, 
          color: '#000',
          right: 48,
          marginTop: 22,
          fontWeight: 'bold'}}> 
        Klinik Hewan </Text>
        <Text style={{fontSize: 16, 
          color: '#1A3150',
          right: 170,
          marginTop: 45,
          fontWeight: 'bold'}}> 
        Buka: 09.00 - 20.00 </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}
          onPress={()=> navigation.navigate('Dashboard')}>Submit</Text>
           </TouchableOpacity>
      </View>

      <View style={styles.banyak1}>
        <Image source={Picture} style={styles.picture}/>
        <Text style={{fontSize: 15, 
          color: '#875C25',
          marginStart:5,
          marginTop: 5}}> 
        Batam </Text>
        <Text style={{fontSize: 20, 
          color: '#000',
          right: 48,
          marginTop: 22,
          fontWeight: 'bold'}}> 
        Klinik Hewan </Text>
        <Text style={{fontSize: 16, 
          color: '#1A3150',
          right: 170,
          marginTop: 45,
          fontWeight: 'bold'}}> 
        Buka: 09.00 - 20.00 </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}
          onPress={()=> navigation.navigate('Dashboard')}>Submit</Text>
           </TouchableOpacity>
      </View>

      <View style={styles.banyak1}>
        <Image source={Picture} style={styles.picture}/>
        <Text style={{fontSize: 15, 
          color: '#875C25',
          marginStart:5,
          marginTop: 5}}> 
        Batam </Text>
        <Text style={{fontSize: 20, 
          color: '#000',
          right: 48,
          marginTop: 22,
          fontWeight: 'bold'}}> 
        Klinik Hewan </Text>
        <Text style={{fontSize: 16, 
          color: '#1A3150',
          right: 170,
          marginTop: 45,
          fontWeight: 'bold'}}> 
        Buka: 09.00 - 20.00 </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}
          onPress={()=> navigation.navigate('Dashboard')}>Submit</Text>
           </TouchableOpacity>
      </View>

      <View style={styles.banyak1}>
        <Image source={Picture} style={styles.picture}/>
        <Text style={{fontSize: 15, 
          color: '#875C25',
          marginStart:5,
          marginTop: 5}}> 
        Batam </Text>
        <Text style={{fontSize: 20, 
          color: '#000',
          right: 48,
          marginTop: 22,
          fontWeight: 'bold'}}> 
        Klinik Hewan </Text>
        <Text style={{fontSize: 16, 
          color: '#1A3150',
          right: 170,
          marginTop: 45,
          fontWeight: 'bold'}}> 
        Buka: 09.00 - 20.00 </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}
          onPress={()=> navigation.navigate('Dashboard')}>Submit</Text>
           </TouchableOpacity>
      </View>
      
      <View style={styles.banyak1}>
        <Image source={Picture} style={styles.picture}/>
        <Text style={{fontSize: 15, 
          color: '#875C25',
          marginStart:5,
          marginTop: 5}}> 
        Batam </Text>
        <Text style={{fontSize: 20, 
          color: '#000',
          right: 48,
          marginTop: 22,
          fontWeight: 'bold'}}> 
        Klinik Hewan </Text>
        <Text style={{fontSize: 16, 
          color: '#1A3150',
          right: 170,
          marginTop: 45,
          fontWeight: 'bold'}}> 
        Buka: 09.00 - 20.00 </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textbutton}
          onPress={()=> navigation.navigate('Dashboard')}>Submit</Text>
           </TouchableOpacity>
      </View>
      
      </ScrollView>
    </View>
  )
}
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: 350,
    height: 40,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 20,
    marginBottom: 20,
    elevation: 2
  },
  picture: {
    width: 124,
    height: 123,
    resizeMode: 'cover',
  },
  icon:{
    flexDirection: 'row',
    marginTop:35,
    marginStart: 25
  },
  atas:{
    backgroundColor:'#1A3150',
    height:80
  },
  banyak:{
    flexDirection: 'row',
    marginStart: 15,
    marginEnd:10,
    borderColor: '#fff',
    borderRadius: 1,
    elevation: 3,
  },
  banyak1:{
    flexDirection: 'row',
    marginStart: 15,
    marginEnd:10,
    borderColor: '#fff',
    borderRadius: 1,
    elevation: 3,
    marginTop: 10
  },
  button: {
    position: 'absolute',
    width: 230,
    height: 40,
    left: 130,
    top: 70,
    backgroundColor: '#FDCB5A',
    borderRadius: 2,

},
textbutton: {
    position: 'absolute',
    height: 18,
    top: 10,
    left: 84,
    fontFamily: 'Roboto',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    color: '#000000'
}
 })

export default Lainnya