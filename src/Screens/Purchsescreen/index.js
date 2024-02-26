import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, SafeAreaView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

function Purchasescreen({navigation}) {
    return (
        <SafeAreaView>
            <ImageBackground style={styles.container} resizeMode='cover' source={Images.background}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.descback}>
                        <Text style={styles.desc}>Cancel Anytime 7-Day Free Trial</Text>
                    </View>
                    <View style={styles.mainboxes}>
                        <View style={styles.boxpurchase}>
                            <Text style={styles.paymentcontent}>MONTHLY</Text>
                            <Text style={styles.paymentcontent}>$14.99 USD</Text>
                        </View>
                        <View style={[styles.boxpurchase, styles.boxpurchase2]}>
                            <View style={styles.boxline}>
                                <Text style={styles.paymentcontent}>YEARLY</Text>
                                <Text style={[styles.cred, styles.line]}>$150.99</Text>
                            </View>
                            <Text style={styles.cred}>$89.99 USD</Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: height * 0.02 }}>
                        <Text style={styles.memdesc}>or Purchase Regular Membership</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.monthly} 
                        onPress={()=>navigation.navigate('pucahsescreen')}>
                            <Text style={styles.monthlydesc}>$14.99 USD Monthly</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.restoremain}>
                        <Text style={styles.restorepara}>Restore Previous in-App Purshase</Text>
                    </View>
                    <View style={{marginTop: height * 0.04}}>
                        <Text style={styles.subshead}>Subscription Trems</Text>
                        <Text style={styles.subspara}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Purchasescreen


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%"
    },
    desc: {
        fontSize: calculateFontSize(17),
        color: '#a99c9e',
        textAlign: 'center',
    },
    descback: {
        backgroundColor: '#27040c',
        padding: 12,
        marginTop: height * 0.27,
    },
    mainboxes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: height * 0.07,
    },
    boxpurchase: {
        backgroundColor: '#000',
        borderRadius: 8,
        paddingVertical: height * 0.02,
        paddingLeft: width * 0.04,
        paddingRight: width * 0.14,
    },
    boxpurchase2: {
        borderWidth: 3,
        borderColor: 'red',
        paddingRight: width * 0.02,
    },
    paymentcontent: {
        color: '#fff',
        fontSize: calculateFontSize(17),
        fontWeight: 'bold',
        paddingBottom: height * 0.014,
    },
    cred: {
        color: 'red',
        fontSize: calculateFontSize(17),
        fontWeight: 'bold',
        paddingBottom: height * 0.014,
    },
    boxline: {
        flexDirection: 'row',
    },
    line: {
        textDecorationLine: 'line-through',
        paddingLeft: width * 0.05,
    },
    memdesc: {
        color: '#fff',
        fontSize: calculateFontSize(18),
        textAlign: 'center'
    },
    monthly: {
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: '#000',
        borderRadius: 8,
        paddingVertical: height * 0.02,
        width: width * 0.6,
    },
    monthlydesc: {
        color: '#fff',
        fontSize: calculateFontSize(16),
        textAlign: 'center',
    },
    restoremain: {
        marginTop: height * 0.04,
        borderBottomWidth: 1,
        borderBottomColor: '#D0D3D4',
        marginHorizontal: width * 0.1,
    },
    restorepara: {
        color: '#fff',
        fontSize: calculateFontSize(14),
        textAlign: 'center',
        paddingBottom: height * 0.03,
    },
    subshead: {
        fontSize: calculateFontSize(20),
        color: '#fff',
        paddingBottom: height * 0.02,
        textAlign: 'center',
    },
    subspara: {
        fontSize: calculateFontSize(15),
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: width * 0.06,
        marginBottom: height * 0.03,
    },
})