import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditScreen = ({navigation}) => {
    return (
        <LinearGradient
            colors={['#F855D2', '#E62FFA91', '#FC093ABA']}
            style={styles.container}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.profileSection}>
                    <Image
                        source={Images.Profileimage}
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>John Adams</Text>
                    <TouchableOpacity style={styles.changephoto}>
                    <Text style={styles.photo}>Change Photo</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.maininfo}>
                    <View style={styles.maininfoinner}>
                        <Text style={styles.infohead}>First Name</Text>
                        <Text style={styles.info}>John</Text>
                    </View>
                    <View style={styles.maininfoinner}>
                        <Text style={styles.infohead}>Last Name</Text>
                        <Text style={styles.info}>Adams</Text>
                    </View>
                    <View style={styles.maininfoinner}>
                        <Text style={styles.infohead}>Phone Number</Text>
                        <Text style={styles.info}>+1 000 777 8341</Text>
                    </View>
                    <View style={styles.maininfoinner}>
                        <Text style={styles.infohead}>Email</Text>
                        <Text style={styles.info}>johnadams@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.buttonmain}>
                <TouchableOpacity style={styles.mainbuttoninner} 
                onPress={()=> navigation.navigate('Reseverscreen')}>
                    <Text style={styles.buttontext}>Save</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerselected}
                    onPress={()=>navigation.navigate('Home')}
                    >
                        <View style={styles.footerselectedinner}>
                            <Ionicons name="chevron-back-outline" size={22} color="white" />
                            <Text style={[styles.footerText, styles.footerTextSelected]}>Back</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Home</Text>
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
    profileSection: {
        alignItems: 'center',
        marginVertical: height * 0.08,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: height * 0.006,
        color: '#fff',
    },
    photo: {
        fontSize: 14,
        color: 'lightgrey',
    },
    maininfo: {
        backgroundColor: '#260222',
        padding: 25,
        marginHorizontal: width * 0.02,
        borderRadius: 5,
    },
    maininfoinner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: height * 0.04,
    },
    infohead: {
        color: '#939293',
        fontSize: 18,
    },
    info: {
        color: '#939293',
        fontSize: 16,
    },
    buttonmain: {
        alignItems: 'center',
    },
    mainbuttoninner: {
        backgroundColor: "#a2e7f2",
        paddingVertical: height * 0.02,
        borderRadius: 10,
        width: width * 0.5,
        marginTop: height * 0.09,
    },
    buttontext: {
        fontSize: calculateFontSize(20),
        textAlign: "center",
        color: "#000", 
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: height * 0.08,
        paddingBottom: height * 0.04,
    },
    footerText: {
        fontSize: 18,
        color: '#fff',
    },
    footerselectedinner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: height * 0.02,
        width: width * 0.3,
    },
    footerselected: { 
        borderBottomWidth: 4,
        borderBottomColor: '#A2E7F2',
    },
    footerTextSelected: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: width * 0.05,
    },
});

export default EditScreen;