import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

const Account = () => {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.atas}>
                <Text style={{
                    color: '#fff',
                    fontSize: 16,
                    marginTop: 30,
                    marginBottom: 12,
                    marginHorizontal: 156
                }}>Profile</Text>
            </View>
            <View style={styles.detail}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/Profile.png')}
                        style={styles.image}
                    />
                    <View>
                        <Text style={{
                            fontWeight: '700',
                            width: 152,
                            height: 20,
                            fontSize: 16,
                            marginTop: 24,
                            marginLeft: 16,
                            color: '#000'
                        }}>Alexandria Raihan</Text>
                        <Text style={{
                            fontWeight: '400',
                            height: 18,
                            fontSize: 12,
                            marginLeft: 16,
                            color: '#1A3150'
                        }}>+628 2184291235</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='edit' size={20}
                            style={styles.icon} onPress={()=> navigation.navigate('Editpro')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Material name='calendar-range' size={20}
                            style={styles.material}
                        />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginLeft: 24,
                            marginTop: 2,
                            color: '#1A3150'
                        }}>24 years</Text>
                    </View>
                    <View>
                        <Icon name='pets' size={20}
                            style={styles.material}
                        />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginLeft: 30,
                            marginTop: 2,
                            color: '#1A3150'
                        }}>4 pets</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/Vector.png')}
                            style={styles.task}
                        />
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            marginLeft: 26,
                            marginTop: 2,
                            color: '#1A3150'
                        }}>3 Times</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.logout}
                onPress={() => navigation.navigate('WellcomeScreen')}
            >
                <Material name='logout' size={25}
                    onPress={() => navigation.navigate('WellcomeScreen')}
                    style={styles.iconlogout}
                />
                <Text style={{
                    fontSize: 12,
                    fontWeight: '400',
                    marginLeft: 9.61,
                    marginTop: 18,
                    color: '#000'
                }}
                    onPress={() => navigation.navigate('WellcomeScreen')}>Logout</Text>
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
        height: 70
    },
    detail: {
        width: 358,
        height: 152,
        backgroundColor: '#fff',
        marginTop: 24,
        marginHorizontal: 16,
        elevation: 4
    },
    logout: {
        flexDirection: 'row',
        width: 358,
        height: 55,
        backgroundColor: '#fff',
        marginTop: 12,
        marginHorizontal: 16,
        elevation: 4
    },
    image: {
        width: 51,
        height: 51,
        marginTop: 18,
        marginLeft: 24
    },
    icon: {
        marginTop: 10.5,
        marginLeft: 70.5,
        color: '#000'
    },
    material: {
        marginLeft: 38,
        marginRight: 38,
        marginTop: 26,
        color: '#1A3150'
    },
    task: {
        width: 21,
        height: 16.5,
        marginLeft: 38,
        marginRight: 38,
        marginTop: 26,
        color: '#1A3150'
    },
    iconlogout: {
        marginVertical: 15.22,
        marginLeft: 28.03,
        color: '#000'
    }
})

export default Account