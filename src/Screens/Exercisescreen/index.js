import React from 'react';
import {
    SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import jestConfig from '../../../jest.config';
import { initialWindowMetrics } from 'react-native-safe-area-context';

function Exercisescreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={Images.EXERCISEBACK} style={styles.backgroundImage}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.maincontent}>
                        <View>
                            <Text style={styles.tophead}>Strengthen Chest & Back</Text>
                            <Text style={styles.toptext}>SotoFits Basic</Text>
                            <Text style={styles.topquantity}>05 Exercises</Text>
                            <View style={styles.topicon}>
                                <Entypo
                                    name='lock'
                                    size={14}
                                    color='#fff'
                                />
                            </View>
                        </View>
                        <View style={styles.startbottom}>
                            <View>
                                <Text style={styles.starthead}>Today's Workout</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.startbuttonmain}>
                                    <Text style={styles.startbutton}>Save Workort</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.equipmentneeded}>Equipment Needed: Dumbbells, Bench, Pullup Bar</Text>
                            <View style={styles.bigbutton}>
                                <Text style={{ fontSize: calculateFontSize(19), color: '#fff' }}>Intro/Warmup</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.bigbuttonsec}>
                                <Text style={{ fontSize: calculateFontSize(19), color: '#fff' }}>Pushups</Text>
                                <TouchableOpacity>
                                    <Text style={styles.innerbutton}>See All Options</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.exercisemain}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <ImageBackground source={Images.EXERCISEONE} style={styles.exerciseone}>
                                    <View style={styles.slidertextmain}>
                                        <Text style={styles.sliderhead}>Pushups</Text>
                                        <Text style={[styles.samesize, styles.colorLight]}>SotoFits Basic</Text>
                                        <Text style={[styles.samesize, styles.colorBlue]}>No Equipment Needed</Text>
                                    </View>
                                </ImageBackground>
                                <ImageBackground source={Images.EXERCISEONE} style={styles.exerciseone}>
                                    <View style={styles.slidertextmain}>
                                        <Text style={styles.sliderhead}>Pushups</Text>
                                        <Text style={[styles.samesize, styles.colorLight]}>SotoFits Basic</Text>
                                        <Text style={[styles.samesize, styles.colorBlue]}>No Equipment Needed</Text>
                                    </View>
                                </ImageBackground>
                                <ImageBackground source={Images.EXERCISEONE} style={styles.exerciseone}>
                                    <View style={styles.slidertextmain}>
                                        <Text style={styles.sliderhead}>Pushups</Text>
                                        <Text style={[styles.samesize, styles.colorLight]}>SotoFits Basic</Text>
                                        <Text style={[styles.samesize, styles.colorBlue]}>No Equipment Needed</Text>
                                    </View>
                                </ImageBackground>
                            </ScrollView>
                        </View>
                        <View>
                            <View style={styles.bigbuttonsec}>
                                <Text style={{ fontSize: calculateFontSize(19), color: '#fff' }}>Pullups</Text>
                                <TouchableOpacity>
                                    <Text style={styles.innerbutton}>See All Options</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.exercisemain}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <ImageBackground source={Images.EXERCISETWO} style={styles.exerciseone}>
                                    <View style={styles.slidertextmain}>
                                        <Text style={styles.sliderhead}>Pullups</Text>
                                        <Text style={[styles.samesize, styles.colorLight]}>SotoFits+</Text>
                                        <Text style={[styles.samesize, styles.colorBlue]}>Pullup Bar Required</Text>
                                    </View>
                                </ImageBackground>
                                <ImageBackground source={Images.EXERCISETWO} style={styles.exerciseone}>
                                    <View style={styles.slidertextmain}>
                                        <Text style={styles.sliderhead}>Pullups</Text>
                                        <Text style={[styles.samesize, styles.colorLight]}>SotoFits+</Text>
                                        <Text style={[styles.samesize, styles.colorBlue]}>Pullup Bar Required</Text>
                                    </View>
                                </ImageBackground>
                                <ImageBackground source={Images.EXERCISETWO} style={styles.exerciseone}>
                                    <View style={styles.slidertextmain}>
                                        <Text style={styles.sliderhead}>Pullups</Text>
                                        <Text style={[styles.samesize, styles.colorLight]}>SotoFits+</Text>
                                        <Text style={[styles.samesize, styles.colorBlue]}>Pullup Bar Required</Text>
                                    </View>
                                </ImageBackground>
                            </ScrollView>
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
        justifyContent: 'flex-start',
    },
    maincontent: {
        paddingTop: height * 0.09,
        paddingHorizontal: width * 0.06,
    },
    tophead: {
        fontSize: calculateFontSize(22),
        color: '#fff'
    },
    toptext: {
        fontSize: calculateFontSize(16),
        color: '#A37282'
    },
    topquantity: {
        fontSize: calculateFontSize(16),
        color: 'red',
        paddingTop: height * 0.02,
    },
    topicon: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        width: width * 0.07,
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    startbottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: height * 0.02,
    },
    starthead: {
        fontSize: calculateFontSize(19),
        color: '#fff'
    },
    startbuttonmain: {
        backgroundColor: '#A2E7F2',
        borderRadius: 8,
        paddingHorizontal: width * 0.06,
    },
    startbutton: {
        fontSize: calculateFontSize(14),
        color: '#000',
        fontWeight: '500',
    },
    equipmentneeded: {
        color: '#A2E7F2',
        fontSize: calculateFontSize(14),
        paddingTop: height * 0.01,
    },
    bigbutton: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingVertical: height * 0.014,
        paddingHorizontal: width * 0.04,
        marginTop: height * 0.02,
    },
    bigbuttonsec: {
        backgroundColor: '#000',
        borderRadius: 10,
        paddingVertical: height * 0.014,
        paddingHorizontal: width * 0.04,
        marginTop: height * 0.04,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    innerbutton: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontSize: calculateFontSize(14),
    },
    exercisemain: {
        marginVertical: height * 0.02,
    },
    exerciseone: {
        width: 250,
        height: 170,
        resizeMode: 'cover',
        marginHorizontal: width * 0.03,
    },
    sliderhead: {
        fontSize: calculateFontSize(20),
        color: '#fff',
        paddingBottom: height * 0.01,
    },
    samesize: {
        fontSize: calculateFontSize(16),
    },
    colorLight: {
        color: 'rgba(231, 231, 231, 0.7)',
    },
    colorBlue: {
        color: 'rgba(162, 231, 242, .7)',
    },
    slidertextmain: {
        paddingTop: height * 0.10,
        paddingHorizontal: width * 0.03,
    },
})

export default Exercisescreen