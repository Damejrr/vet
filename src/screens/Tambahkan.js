import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Tambahkan = () => {
    const navigation = useNavigation();
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

            <View>
                <Text style={{
                    color: '#1A3150',
                    fontSize: 16,
                    top: 20,
                    start: 30,
                    fontFamily: 'Roboto'
                }}>
                    Nama Hewan Peliharaan Kamu
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ronald"
                    placeholderTextColor="#1A3150"
                />
            </View>

            <View>
                <Text style={{
                    color: '#1A3150',
                    fontSize: 16,
                    top: 40,
                    start: 30,
                    fontFamily: 'Roboto',
                }}>
                    Pilih Hewan Peliharaan Kamu
                </Text>

                <View style={{ flexDirection: 'row',}}>

                    <TouchableOpacity style={styles.hewan}>
                    <Image source={require('../assets/eDog.png')}
                        style={{ width: 100, height: 40 }}
                    />
                    {/* <Text>Anjing</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.hewan}>
                    <Image source={require('../assets/eHam.png')}
                        style={{ width: 100, height: 40, marginLeft: 5, }}
                    />
                        {/* <Text>Hamster</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.hewan}>
                    <Image source={require('../assets/eKel.png')}
                        style={{ width: 100, height: 40,marginLeft: 9, }}
                    />
                        {/* <Text>Kelinci</Text> */}
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', top: 10 }}>
                    <TouchableOpacity style={styles.hewan}>
                    <Image source={require('../assets/eKuc.png')}
                        style={{ width: 100, height: 40, }}
                    />
                        {/* <Text>Kucing</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hewan}>
                    <Image source={require('../assets/eKuc.png')}
                        style={{ width: 100, height: 40,marginLeft: 5, }}
                    />
                        {/* <Text>Kucing</Text> */}
                    </TouchableOpacity>
                </View>

            </View>
            <View>
                <Text style={{
                    color: '#1A3150',
                    fontSize: 16,
                    top: 80,
                    start: 30,
                    fontFamily: 'Roboto',
                }}>
                    Pilih Kelamin Hewan Peliharaan Kamu
                </Text>
                <View>
                    <View style={{ flexDirection: 'row', top: 40 }}>
                        <TouchableOpacity style={styles.hewan}>
                        <Image source={require('../assets/eMal.png')}
                        style={{ width: 100, height: 40, }}
                    />
                            {/* <Text>Male</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hewan}>
                        <Image source={require('../assets/eFem.png')}
                        style={{ width: 100, height: 40,marginLeft: 5, }}
                    />
                            {/* <Text>Female</Text> */}
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <View>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('Submit')}
            style={{
                    width: 340,
                    height: 50,
                    marginTop: 380,
                    marginLeft: 24,
                    marginBottom: 10,
                    borderRadius: 4,
                    backgroundColor: '#FDCB5A'
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        marginVertical: 15,
                        marginLeft: 135,
                        color: '#000'
                    }}onPress={()=> navigation.navigate('Submit')}>Tambahkan</Text>
                </TouchableOpacity>
            </View>
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
    hewan: {
        height: 36,
        width: 102,
        // borderRadius: 4,
        // backgroundColor: '#C2CDDB',
        top: 50,
        start: 30,
    },
    button: {
        height: 40,
        width: 312,
        left: 23,
        top: 588,
        borderRadius: 4
    }
})

export default Tambahkan


