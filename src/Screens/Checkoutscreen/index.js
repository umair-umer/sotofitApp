import React from 'react';
import {
    SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground, TouchableWithoutFeedback, TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import jestConfig from '../../../jest.config';
import { initialWindowMetrics } from 'react-native-safe-area-context';

function Checkout() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Images.CHECKBACK} style={styles.backgroundImage}>
               <ScrollView showsVerticalScrollIndicator={false}>
               <View style={styles.head}>
                    <Text style={styles.heading}>Checkout</Text>
                </View>
                <View style={styles.allcontent}>
                    <View>
                        <Text style={styles.cardlable}>Payment Details</Text>
                        <View style={styles.cardbox}>
                            <Entypo
                                name='credit-card'
                                size={45}
                                color='red'
                            />
                            <Text style={styles.cardtext}>Credit card</Text>
                            <TouchableOpacity style={styles.cardlink}>
                                <Text style={styles.cardlinktext}>Change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.namesec}>
                        <Text style={styles.namelabel}>Cardholder name</Text>
                        <TextInput
                            style={styles.nameinput}
                            placeholder='John Adams'
                            placeholderTextColor={'rgba(255, 255, 255, .7)'}
                        />
                    </View>
                    <View style={styles.namesec}>
                        <Text style={styles.namelabel}>Card number</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={Images.TWODOT} style={styles.mastercard} />
                            <TextInput
                                style={styles.cardinput}
                                placeholder='1234-4321-1234-4321'
                                placeholderTextColor={'rgba(255, 255, 255, .7)'}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.namesec}>
                            <Text style={styles.namelabel}>Expiration</Text>
                            <TextInput
                                style={styles.twosameinput}
                                placeholder='MM/YY'
                                placeholderTextColor={'rgba(255, 255, 255, .7)'}
                            />
                        </View>
                        <View style={styles.namesec}>
                            <Text style={styles.namelabel}>CVV</Text>
                            <TextInput
                                style={styles.twosameinput}
                                placeholder='123'
                                placeholderTextColor={'rgba(255, 255, 255, .7)'}
                            />
                        </View>
                    </View>
                    <View style={styles.namesec}>
                        <Text style={styles.namelabel}>Email</Text>
                        <TextInput
                            style={styles.emailinput}
                            placeholder='Enter Your Email'
                            placeholderTextColor={'rgba(255, 255, 255, .7)'}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonback}>
                            <Text style={styles.button}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               </ScrollView>
               
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    head: {
        alignItems: 'center',
        paddingTop: height * 0.03,
    },
    heading: {
        fontSize: calculateFontSize(24),
        color: '#fff',
        fontWeight: '500',
    },
    allcontent: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.04,
    },
    cardlable: {
        color: '#fff',
        fontSize: calculateFontSize(16),
        paddingBottom: height * 0.03,
    },
    cardbox: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 25,
        borderRadius: 15,
    },
    cardtext: {
        color: '#fff',
        fontSize: calculateFontSize(16),
        paddingRight: width * 0.20,
    },
    cardlink: {
        borderWidth: 1,
        borderColor: '#414141',
        borderRadius: 5,
        padding: 5,
    },
    cardlinktext: {
        color: '#fff',
        fontSize: calculateFontSize(11),
    },
    namesec: {
        paddingTop: height * 0.04,
    },
    namelabel: {
        color: '#fff',
        fontSize: calculateFontSize(18),
    },
    nameinput: {
        backgroundColor: 'rgba(0, 0, 0, .57)',
        borderRadius: 10,
        paddingHorizontal: width * 0.05,
        marginTop: height * 0.016,
        color: '#fff',
    },
    cardinput: {
        borderRadius: 10,
        paddingLeft: width * 0.22,
        marginTop: height * 0.016,
        backgroundColor: '#000',
        width: width * 0.9,
        color: '#fff',
    },
    mastercard: {
        width: 40,
        height: 40,
        position: 'absolute',
        zIndex: 1,
        left: 25,
        top: 15,
    },
    twosameinput: {
        borderRadius: 10,
        paddingHorizontal: width * 0.03,
        marginTop: height * 0.016,
        backgroundColor: '#000',
        width: width * 0.4,
        color: '#fff',
    },
    emailinput: {
        borderRadius: 10,
        paddingHorizontal: width * 0.03,
        marginTop: height * 0.016,
        backgroundColor: '#000',
        color: '#fff',
    },
    buttonback: {
        alignItems: 'center',
        backgroundColor: "#a2e7f2",
        paddingVertical: height * 0.014,
        borderRadius: 6,
        marginTop: height * 0.05,
        marginBottom: height * 0.004,
        marginHorizontal: width * 0.2,
    },
    button: {
        fontSize: calculateFontSize(16),
        color: "#000",
        fontWeight: '800',
    },
})

export default Checkout
