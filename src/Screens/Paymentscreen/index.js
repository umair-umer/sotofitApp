import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import navigation from '../../Config/navigation';

function PaymentOptionsScreen({navigation}) {
    return (
        <LinearGradient colors={['#F855D2', '#E62FFA91', '#FC093ABA']}
            style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false
            }>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Payment Options</Text>
                </View>
                <View style={styles.cardContainer}>
                    
                    <Text style={styles.cardTitle}>Your Card</Text>
                    <Image source={Images.paymentcard} style={styles.cardimage}></Image>
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('checkoutscreen')}>
                        <Text style={styles.addButtonText}>Add New Card</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.otherPaymentContainer}>
                    <Text style={styles.otherPaymentTitle}>Other Payment Method</Text>
                    <TouchableOpacity style={styles.paymentMethod}>
                        <View>
                            <Image source={Images.Mastercard} style={styles.logo} />
                        </View>
                        <View>
                            <Text style={styles.paymentHead}>Mastercard</Text>
                            <Text style={styles.paymentText}>1234-4321 *** ***</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentMethod}>
                        <View>
                            <Image source={Images.Paypal} />
                        </View>
                        <View>
                            <Text style={styles.paymentHead}>PayPal</Text>
                            <Text style={styles.paymentText}>1234-4321 *** ***</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentMethod}>
                        <View>
                            <Image source={Images.American} />
                        </View>
                        <View>
                            <Text style={styles.paymentHead}>American Express</Text>
                            <Text style={styles.paymentText}>1234-4321 *** ***</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};  


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        marginTop: 50,
    },
    headerText: {
        fontSize: calculateFontSize(24),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    cardContainer: {
        padding: 20,
    },
    cardTitle: {
        fontSize: calculateFontSize(17),
        fontWeight: '600',
        marginBottom: 10,
        color: '#fff',
    },
    addButton: {
        marginTop: height * 0.01,
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
    },
    addButtonText: {
        color: '#fff',
        fontSize: calculateFontSize(15),
        textAlign: 'center',
    },
    otherPaymentContainer: {
        marginTop: 20,
    },
    otherPaymentTitle: {
        fontSize: calculateFontSize(20),
        fontWeight: '500',
        marginLeft: 20,
        color: '#fff'
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#000',
        padding: 15,
        marginHorizontal: width * 0.05,
        borderRadius: 10,
        marginVertical: height * 0.02,
    },
    logo: {
        width: 60,
        height: 50,
    },
    paymentHead: {
        color: '#fff',
        fontSize: calculateFontSize(19),
        fontWeight: '600',
    },
    paymentText: {
        color: '#9C9C9C',
        fontSize: calculateFontSize(11),
    },
});

export default PaymentOptionsScreen;