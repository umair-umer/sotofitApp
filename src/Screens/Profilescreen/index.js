import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
    return (
        <LinearGradient
            colors={['#F855D2', '#E62FFA91', '#FC093ABA']}
            style={styles.container}
        >
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.logouthead}>
                        <Text style={styles.logouttext}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileSection}>
                    <Image
                        source={Images.Profileimage}
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>John Adams</Text>
                    <Text style={styles.phone}>+91 123-4567</Text>
                    <TouchableOpacity style={styles.editButton}
                     onPress={()=>navigation.navigate('Editproscreen')}>
                        <Text style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.acchead}>
                    <Text style={styles.accheadtext}>Account</Text>
                </View>
                <View style={styles.menuSection}>
                    <MenuItem title="My Profile" />
                    <MenuItem title="Difficulty & Goals" />
                    <MenuItem title="Change Password" />
                    <MenuItem title="Notifications" />
                    <MenuItem title="Emergency Contacts" />
                    <MenuItem title="Privacy & Policy" />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerselected}>
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

const MenuItem = ({ title }) => (
    <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>{title}</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="white" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16,
    },
    logouthead: {
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.006,
    },
    logouttext: {
        color: '#fff',
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 32,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: height * 0.006,
        color: '#fff',
    },
    phone: {
        fontSize: 18,
        color: 'lightgrey',
    },
    editButton: {
        marginTop: height * 0.02,
        backgroundColor: '#A2E7F2',
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.005,
        borderRadius: 10,
    },
    editButtonText: {
        color: 'black',
        fontSize: 16,
    },
    acchead: {
        marginHorizontal: width * 0.04,
        paddingHorizontal: width * 0.04,
        paddingBottom: height * 0.01,
    },
    accheadtext: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    menuSection: {
        marginHorizontal: 16,
        borderRadius: 12,
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#D8D8D866',
    },
    menuItemText: {
        fontSize: 18,
        color: '#fff',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: height * 0.1,
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

export default ProfileScreen;