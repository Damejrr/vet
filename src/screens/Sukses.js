import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Sukses = () => {
  const navigation = useNavigation();
    setTimeout(() => {
        navigation.navigate('Notifikasi');
    }, 3000)
    return (
        <View style={{ flex: 1, backgroundColor: '#1E1E1E' }}>
            <Modal isVisible={true}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#1A3150',
                        padding: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                    }}>
                    <View></View>
                    <Image
                        source={require('../assets/centang.png')}
                        style={{ width: 180, height: 180, alignContent: 'center' }}></Image>
                    <Text style={{ color: '#fff', fontSize: 23, fontWeight: 'bold', marginTop: 20 }}>Booking Sukses</Text>
                </View>
            </Modal>
        </View>
    );
}

export default Sukses