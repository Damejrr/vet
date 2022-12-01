import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Editpro = () => {
  const navigation = useNavigation();
  const [male, setFamale] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
        <TouchableOpacity style={styles.icon}>
          <Icon name='arrow-left' color={'#fff'} size={20} onPress={() => navigation.goBack()} />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginHorizontal: 90,
              marginLeft: 20,
              marginStart: 100,
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              bottom: 4
            }} onPress={() => navigation.goBack()}>Sebelumnya</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.basic}>
        <Text style={{
          color: 'black',
          fontSize: 12,
          start: 30,
          top: 2
        }}>
          Basic Information
        </Text>
        <Text style={{
          color: 'red',
          fontSize: 12,
          start: 30,
          top: 2
        }}> *
        </Text>
      </View>

      <View>
        <Text style={{
          color: '#1A3150',
          fontSize: 12,
          top: 20,
          start: 30
        }}>
          Full Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Alexandria Raihan"
          placeholderTextColor="#1A3150"
        />

        <Text style={{
          color: '#000',
          fontSize: 12,
          top: 30,
          start: 30
        }}>
          Gender
        </Text>
        <View style={styles.wrapper}>

        {['Male', 'Female'].map(feeling => (
            <View key={feeling} style={styles.male}>
              <Text style={styles.feeling}>{feeling}</Text>
              <TouchableOpacity style={styles.gender}
              onPress={() => setFamale(feeling)}>
                {male === feeling && <View style={styles.inner} />}
              </TouchableOpacity>
              </View>
          ))}
           


        </View>
      </View>


      <View style={styles.contact}>
        <Text style={{
          color: 'black',
          fontSize: 12,
          start: 30,
          top: 2
        }}>
          Contact Details
        </Text>
      </View>

      <View>
        <Text style={{
          color: '#000',
          fontSize: 12,
          top: 15,
          start: 30
        }}>
          Mobile Number
        </Text>
        <TextInput
          style={styles.input}
          placeholder="+62821 9123912939"
          placeholderTextColor="#1A3150"
        />

        <Text style={{
          color: '#000',
          fontSize: 12,
          top: 30,
          start: 30
        }}>
          Email
        </Text>
        <TextInput
          style={styles.input2}
          placeholder="asdeiqieqewi@gmail.com"
          placeholderTextColor="#1A3150"
        />
      </View>


      <View style={styles.hewan}>
        <Text style={{
          color: 'black',
          fontSize: 12,
          start: 30,
          top: 2
        }}>
          Informasi Tentang Hewan Peliharaan
        </Text>
      </View>

      <View>
        <Text style={{
          color: '#000',
          fontSize: 12,
          top: 15,
          start: 30
        }}>
          Jumlah Hewan Peliharaan
        </Text>
        <TextInput
          style={styles.input}
          placeholder="4 Pets"
          placeholderTextColor="#1A3150"
        />

        <Text style={{
          color: '#000',
          fontSize: 12,
          top: 30,
          start: 30
        }}>
          Waktu Berkunjung Untuk Perawatan
        </Text>
        <TextInput
          style={styles.input2}
          placeholder="3 Times"
          placeholderTextColor="#1A3150"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Account')}>
        <Text style={styles.textButtom}
          onPress={() => navigation.navigate('Account')}>Tambahkan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  atas: {
    backgroundColor: '#1A3150',
    height: 60
  },
  icon: {
    flexDirection: 'row',
    marginTop: 20,
    marginStart: 25
  },
  hewan: {
    backgroundColor: '#F1F1F1',
    height: 22,
    flexDirection: 'row',
    marginTop: 65
  },
  contact: {
    backgroundColor: '#F1F1F1',
    height: 22,
    flexDirection: 'row',
    marginTop: 50
  },
  basic: {
    backgroundColor: '#F1F1F1',
    height: 22,
    flexDirection: 'row'
  },
  input: {
    width: 328,
    height: 42,
    borderWidth: 2,
    borderColor: '#749DD2',
    borderRadius: 5,
    color: 'white',
    paddingHorizontal: 20,
    top: 25,
    start: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input2: {
    width: 328,
    height: 42,
    borderWidth: 2,
    borderColor: '#749DD2',
    borderRadius: 5,
    color: 'white',
    paddingHorizontal: 20,
    top: 40,
    start: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    width: 300,
    height: 50,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    start: 45
  },
  textButtom: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  inner: {
    width: 15,
    height: 15,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    top: 4,
    start:4
  },
  gender: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 20,
    borderColor:'#FDCB5A'
  },
  feeling: {
    fontSize: 15,
    top: 23,
    start:29,
    color: '#000'
  },
  male: {
    marginHorizontal: 15, 
    
  },
  wrapper: {
    flexDirection: 'row',
    top: 20,
    start: 25
  }

})
export default Editpro