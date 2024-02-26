import React from 'react';
import {
    SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground, TouchableWithoutFeedback, TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import navigation from '../../Config/navigation';
import { Workoutslider } from '..';

function Foodselectscreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Images.GROCERYBACKTWO} style={styles.backgroundImage}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Ionicons name="chevron-back-outline" size={22} color="white" />
                        <Text style={styles.headerText}>Home</Text>
                    </TouchableOpacity>
                    <MaterialCommunityIcons
                        name='fire-circle'
                        size={50}
                        color='#414244'
                    />
                </View>
                <View style={styles.content}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>Calorie Tracker</Text>
                        <View style={styles.topicon}>
                            <Ionicons
                                name='settings-sharp'
                                size={20}
                                color='#000'
                            />
                        </View>
                    </View>
                    <View style={styles.listmain}>
                        <View style={styles.textimage}>
                            <Text style={styles.headinner}>Fit Joy Honey Mustard Pretzels</Text>
                            <Image source={Images.PROTEIN3} style={styles.image} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View>
                                <Text style={styles.dashedtext}>_ _ _ _  Serving</Text>
                            </View>
                            <View>
                                <Text style={styles.dashedtext}>75 Cals</Text>
                                <Text style={styles.dashedtext}>Serving</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: height * 0.02 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    style={styles.foodinput}
                                    placeholder='Serving'
                                    placeholderTextColor={'#fff'}
                                />
                                <TextInput
                                    style={styles.foodinput}
                                    placeholder='Ounces'
                                    placeholderTextColor={'#fff'}
                                />
                                <TextInput
                                    style={styles.foodinput}
                                    placeholder='Lbs'
                                    placeholderTextColor={'#fff'}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    style={styles.foodinput}
                                    placeholder='Grams'
                                    placeholderTextColor={'#fff'}
                                />
                                <TextInput
                                    style={styles.foodinput}
                                    placeholder='ML'
                                    placeholderTextColor={'#fff'}
                                />
                                <TextInput
                                    style={styles.foodinput}
                                    placeholder='Fl Oz'
                                    placeholderTextColor={'#fff'}
                                />
                            </View>
                        </View>
                        <View style={styles.eatbuttons}>
                            <TouchableOpacity onPress={() => navigation.navigate('breakfast')}>
                                <Text style={styles.eatbutton}>+ Breakfast</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.eatbutton}>+ Lunch</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.eatbutton}>+ Dinner</Text>
                            </TouchableOpacity>

                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.eatbutton}>+ Snack</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: calculateFontSize(17),
    },
    content: {
        flex: 1,
        paddingTop: height * 0.06,
        paddingHorizontal: width * 0.04,
    },
    topicon: {
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 7,
    },
    title: {
        fontSize: calculateFontSize(18),
        color: '#fff'
    },
    listmain: {
        backgroundColor: '#000',
        height: height * 0.45,
        paddingVertical: height * 0.03,
        paddingHorizontal: width * 0.08,
        marginTop: height * 0.06,
    },
    textimage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: height * 0.03,
    },
    headinner: {
        color: '#fff',
        fontSize: calculateFontSize(20),
        width: width * 0.5,
    },
    image: {
        width: 60,
        height: 60,
    },
    dashedtext: {
        color: '#fff',
        fontSize: calculateFontSize(17),
    },
    foodinput: {
        backgroundColor: '#414141',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.002,
        borderRadius: 5,
        color: '#fff',
        width: width * 0.22,
        marginVertical: height * 0.006,
    },
    eatbuttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    eatbutton: {
        color: '#09DBFC',
        fontSize: calculateFontSize(16),
        fontWeight: '500',
        width: width * 0.29,
        paddingBottom: height * 0.01,
    },
});

export default Foodselectscreen