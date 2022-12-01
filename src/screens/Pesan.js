import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Pesan = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
      <Image source={require('../assets/Rectangle.png')}
         style={styles.background}
       />
        </View>
        <View>
        <Text style={{ fontSize: 20,
                        color: '#fff',
                        textAlign:'center',
                        top: 20,
                        fontWeight: 'bold'}}>Messager </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.banyak} onPress={() => navigation.navigate('Tulispesan')}>
                    <Image source={require('../assets/image.png')} style={styles.picture} />
                    
                    <Text style={{
                        fontSize: 10,
                        color: '#000000',
                        left:240,
                        marginTop: 5
                    }}>
                        1 hrs </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 15,
                        Top: 10,
                        fontWeight: 'bold'
                    }}>
                        RS Kalimanjaro </Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        right: 157,
                        marginTop: 25,
                    }}>
                        Hallo kak, Kamu Dimana? Sudah Bisa 
                      </Text>
                      <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        right: 355,
                        marginTop: 38,
                    }}>
                        Ke Klinik
                      </Text>
            </TouchableOpacity>
                    </View>

                    <View>
          <TouchableOpacity style={styles.banyak1} onPress={() => navigation.navigate('Tulispesan')}>
                    <Image source={require('../assets/image.png')} style={styles.picture} />
                    
                    <Text style={{
                        fontSize: 10,
                        color: '#000000',
                        left:240,
                        marginTop: 5
                    }}>
                        1 hrs </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 15,
                        Top: 10,
                        fontWeight: 'bold'
                    }}>
                        RS Kalimanjaro </Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        right: 157,
                        marginTop: 25,
                    }}>
                        Hallo kak, Kamu Dimana? Sudah Bisa 
                      </Text>
                      <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        right: 355,
                        marginTop: 38,
                    }}>
                        Ke Klinik
                      </Text>
            </TouchableOpacity>
                    </View>

                    <View>
          <TouchableOpacity style={styles.banyak2} onPress={() => navigation.navigate('Tulispesan')}>
                    <Image source={require('../assets/image.png')} style={styles.picture} />
                    
                    <Text style={{
                        fontSize: 10,
                        color: '#000000',
                        left:240,
                        marginTop: 5
                    }}>
                        1 hrs </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 15,
                        Top: 10,
                        fontWeight: 'bold'
                    }}>
                        RS Kalimanjaro </Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        right: 157,
                        marginTop: 25,
                    }}>
                        Hallo kak, Kamu Dimana? Sudah Bisa 
                      </Text>
                      <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        right: 355,
                        marginTop: 38,
                    }}>
                        Ke Klinik
                      </Text>
            </TouchableOpacity>
                    </View>

                    <View>
          <TouchableOpacity style={styles.banyak3} onPress={() => navigation.navigate('Tulispesan')}>
                    <Image source={require('../assets/image.png')} style={styles.picture} />
                    
                    <Text style={{
                        fontSize: 10,
                        color: '#000000',
                        left:240,
                        marginTop: 5
                    }}>
                        1 hrs </Text>
                    <Text style={{
                        fontSize: 20,
                        color: '#000',
                        right: 15,
                        Top: 10,
                        fontWeight: 'bold'
                    }}>
                        RS Kalimanjaro </Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        right: 157,
                        marginTop: 25,
                    }}>
                        Hallo kak, Kamu Dimana? Sudah Bisa 
                      </Text>
                      <Text style={{
                        fontSize: 12,
                        color: '#000000',
                        right: 355,
                        marginTop: 38,
                    }}>
                        Ke Klinik
                      </Text>
            </TouchableOpacity>
                    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
},
background: {
  flex: 1,
  position: 'absolute',
  width: 400,
  height: 60,
},
banyak: {
  flexDirection: 'row',
  marginStart: 25,
  marginEnd: 25,
  top:80,
  borderColor: '#fff',
  borderRadius: 1,
  bottom:75
},
banyak1: {
  flexDirection: 'row',
  marginStart: 25,
  marginEnd: 25,
  top:120,
  borderColor: '#fff',
  borderRadius: 1,
  bottom:75
},
banyak2: {
  flexDirection: 'row',
  marginStart: 25,
  marginEnd: 25,
  top:160,
  borderColor: '#fff',
  borderRadius: 1,
  bottom:75
},
banyak3: {
  flexDirection: 'row',
  marginStart: 25,
  marginEnd: 25,
  top:200,
  borderColor: '#fff',
  borderRadius: 1,
  bottom:75
},
picture: {
  width: 60,
  height: 60,
  resizeMode: 'cover',
  borderRadius: 30
},
})
export default Pesan