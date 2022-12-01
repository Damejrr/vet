import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Notifikasi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.atas}>
        <Text style={{
          color: '#fff',
          width: 95,
          height: 19,
          fontSize: 16,
          fontWeight: '700',
          marginVertical: 24,
          marginHorizontal: 140
        }}>Notifications</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{
        fontSize: 20,
        color: '#000',
        marginLeft: 16,
        marginTop: 35,
        fontWeight: '700'
      }}>My Appointment</Text>
      <View style={styles.banyak}>
        <View style={styles.calendar}>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            width: 25,
            height: 40,
            marginLeft: 14,
            marginTop: 11,
            textAlign: 'center',
            color: '#fff'
          }}>12 Oct</Text>
        </View>
        <View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 16,
            marginTop: 14,
            color: '#875C25'
          }}>Batam</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 16,
            color: '#000'
          }}>Klinik Kehewanan</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '700',
            marginLeft: 16,
            color: '#1A3150'
          }}>12:00 - 15:00 Siang</Text>
        </View>
      </View>

      <View style={styles.banyak}>
        <View style={styles.calendar}>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            width: 25,
            height: 40,
            marginLeft: 14,
            marginTop: 11,
            textAlign: 'center',
            color: '#fff'
          }}>12 Oct</Text>
        </View>
        <View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 16,
            marginTop: 14,
            color: '#875C25'
          }}>Jakarta</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 16,
            color: '#000'
          }}>RS Jiwa Hewan</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '700',
            marginLeft: 16,
            color: '#1A3150'
          }}>09:00 - 12:00 Siang</Text>
        </View>
      </View>

      <View style={styles.banyak}>
        <View style={styles.calendar}>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            width: 25,
            height: 40,
            marginLeft: 14,
            marginTop: 11,
            textAlign: 'center',
            color: '#fff'
          }}>12 Oct</Text>
        </View>
        <View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 16,
            marginTop: 14,
            color: '#875C25'
          }}>Batam</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 16,
            color: '#000'
          }}>Klinik Kehewanan</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '700',
            marginLeft: 16,
            color: '#1A3150'
          }}>12:00 - 15:00 Siang</Text>
        </View>
      </View>

      <Text style={{
        fontSize: 20,
        color: '#000',
        marginTop: 32,
        marginLeft: 16,
        fontWeight: '700'
      }}>History</Text>

      <View style={styles.history}>
        <View>
          <Image source={require('../assets/rs.jpg')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 12,
            marginTop: 16,
            color: '#875C25'
          }}>Batam</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 12,
            color: '#000'
          }}>Klinik Kehewanan</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '700',
            marginLeft: 12,
            color: '#1A3150'
          }}>Buka : 09.00 - 20.00</Text>
          <TouchableOpacity
            style={styles.button}>
            <Text style={{
              fontSize: 12,
              fontWeight: '500',
              marginVertical: 6,
              marginHorizontal: 65,
              color: '#000'
              }}>Book Again</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.history}>
        <View>
          <Image source={require('../assets/rs.jpg')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 12,
            marginTop: 16,
            color: '#875C25'
          }}>Batam</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 12,
            color: '#000'
          }}>Klinik Kehewanan</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '700',
            marginLeft: 12,
            color: '#1A3150'
          }}>Buka : 09.00 - 20.00</Text>
          <TouchableOpacity
            style={styles.button}>
            <Text style={{
              fontSize: 12,
              fontWeight: '500',
              marginVertical: 6,
              marginHorizontal: 65,
              color: '#000'
            }}>Book Again</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.history}>
        <View>
          <Image source={require('../assets/rs.jpg')}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={{
            fontSize: 12,
            fontWeight: '400',
            marginLeft: 12,
            marginTop: 16,
            color: '#875C25'
          }}>Batam</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 12,
            color: '#000'
          }}>Klinik Kehewanan</Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '700',
            marginLeft: 12,
            color: '#1A3150'
          }}>Buka : 09.00 - 20.00</Text>
          <TouchableOpacity
            style={styles.button}>
            <Text style={{
              fontSize: 12,
              fontWeight: '500',
              marginVertical: 6,
              marginHorizontal: 65,
              color: '#000'
            }}>Book Again</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text></Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  atas: {
    backgroundColor: '#1A3150',
    height: 70
  },
  banyak: {
    flexDirection: 'row',
    width: 364,
    height: 84,
    marginTop: 12,
    marginHorizontal: 16,
    borderColor: '#fff',
    borderRadius: 4,
    elevation: 4,
  },
  calendar: {
    width: 58,
    height: 60,
    marginLeft: 24,
    marginVertical: 12,
    borderRadius: 5,
    backgroundColor: '#1A3150'
  },
  history: {
    flexDirection: 'row',
    width: 364,
    height: 128,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 4,
    elevation: 4,
    color: '#fff'
  },
  image: {
    width: 124,
    height: 123,
    marginTop: 5,
    borderRadius: 4
  },
  button: {
    width: 200,
    height: 35,
    marginLeft: 12,
    marginTop: 9,
    borderRadius: 2,
    backgroundColor: '#FDCB5A'
  }
})
export default Notifikasi