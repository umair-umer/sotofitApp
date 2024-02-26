import React from 'react';
import {
    SafeAreaView, View, Text, Image, TouchableOpacity, 
    StyleSheet, ScrollView, Dimensions, ImageBackground, 
    TouchableWithoutFeedback, TextInput, Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import navigation from '../../Config/navigation';

function Foodsearchscreen({navigation}) {
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
                    <View style={styles.mysearch}>
                        <View style={{ position: 'relative' }}>
                            <TextInput style={styles.search} placeholder='Pretzels' placeholderTextColor={'#fff'} />
                            <View style={{ position: "absolute", right: 20, top: 8 }}>
                                <Ionicons
                                    name='search-outline'
                                    size={30}
                                    color='#5E5E5E'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.listmain}>
                        <View style={styles.boxinnersingle}>
                            <View>
                                <Image source={Images.PROTEIN1} style={styles.boximage}></Image>
                                <TouchableOpacity onPress={()=>navigation.navigate('selectfood')}>
                                    <Text style={styles.boxbutton}>+ add</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.mainboxtext}>Snyder of Hanover Classic Twist</Text>
                            </View>
                            <View>
                                <Text style={styles.bottomboxtext}>110 Cals</Text>
                                <Text style={styles.bottomboxtext}>Serving</Text>
                            </View>
                        </View>
                        <View style={styles.boxinnersingle}>
                            <View>
                                <Image source={Images.PROTEIN2} style={styles.boximage}></Image>
                                <TouchableOpacity>
                                    <Text style={styles.boxbutton}>+ add</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.mainboxtext}>UTZ Extra Dark</Text>
                            </View>
                            <View>
                                <Text style={styles.bottomboxtext}>180 Cals</Text>
                                <Text style={styles.bottomboxtext}>Serving</Text>
                            </View>
                        </View>
                        <View style={styles.boxinnersingle}>
                            <View>
                                <Image source={Images.PROTEIN3} style={styles.boximage}></Image>
                                <TouchableOpacity>
                                    <Text style={styles.boxbutton}>+ add</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.mainboxtext}>Fit Joy Honey Mustard Pretzels</Text>
                            </View>
                            <View>
                                <Text style={styles.bottomboxtext}>75 Cals</Text>
                                <Text style={styles.bottomboxtext}>Serving</Text>
                            </View>
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
    mysearch: {
        marginVertical: height * 0.04,
    },
    search: {
        backgroundColor: '#000',
        fontSize: calculateFontSize(14),
        borderRadius: 10,
        paddingHorizontal: width * 0.04,
        marginBottom: height * 0.02,
        color: '#fff',
        ...Platform.select({
            ios:{
                backgroundColor: '#000',
                fontSize: calculateFontSize(14),
                borderRadius: 10,
                paddingHorizontal: width * 0.04,
                paddingVertical:height * 0.02,
                marginBottom: height * 0.01,
                color: '#fff',
            }
        })
    },
    listmain: {
        backgroundColor: '#000',
        height: height * 0.5,
        padding: 15,
        ...Platform.select({
            ios:{
                backgroundColor: '#000',
                height: height * 0.54,
                padding: 15,
            }
        })
    },
    boxinnersingle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#726E71',
        paddingBottom: height * 0.01,
        marginBottom: height * 0.03,
    },
    boximage: {
        width: 70,
        height: 65,
    },
    boxbutton: {
        color: '#09DBFC',
        fontSize: calculateFontSize(16),
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: height * 0.01,
    },
    mainboxtext: {
        color: '#fff',
        fontSize: calculateFontSize(17),
        fontWeight: '500',
        width: width * 0.4,
    },
    bottomboxtext: {
        color: '#fff',
        fontSize: calculateFontSize(16),
        fontWeight: '500',
    },
});

export default Foodsearchscreen