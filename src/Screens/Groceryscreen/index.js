import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground, TouchableWithoutFeedback
 } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Grocerylistscreen({navigation}) {
    return (
           <SafeAreaView style={styles.container}>
              <ImageBackground source={Images.GROCERYBACK} style={styles.backgroundImage}>
            <View style={styles.header}>
            <TouchableOpacity style={{flexDirection:'row'}}>
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
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
              <ScrollView style={styles.list}>
                <Text style={styles.listItem}>- EGGS</Text>
                <Text style={styles.listItem}>- 80% LEAN GROUND BEEF</Text>
                <Text style={styles.listItem}>- CUCUMBER</Text>
                <Text style={styles.listItem}>- CHICKEN BREAST</Text>
                <Text style={styles.listItem}>- SQUASH</Text>
                <Text style={styles.listItem}>- PROTEIN POWDER</Text>
              </ScrollView>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.buttonBack]} onPress={()=>navigation.navigate('calories')}>
                  <Text style={styles.buttonText}>Instacart</Text>
                  <View style={styles.buttonInner}>
                    <Text style={styles.buttonInnerText}>Order Now</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonBack]}>
                  <Text style={styles.buttonText}>Kroger Delivery</Text>
                  <View style={styles.buttonInner}>
                    <Text style={styles.buttonInnerText}>Order Now</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonBack]}>
                  <Text style={styles.buttonText}>Walmart</Text>
                  <View style={styles.buttonInner}>
                    <Text style={styles.buttonInnerText}>Order Now</Text>
                  </View>
                </TouchableOpacity>
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
        paddingTop: height * 0.04,
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
        marginHorizontal: width * 0.09,
        backgroundColor: 'rgba(162, 231, 242, 0.7)',
        height: height * 0.3,
        paddingHorizontal: width * 0.06,
        paddingVertical: height * 0.01,
        marginTop: height * 0.06,
        marginBottom: height * 0.08,
        borderRadius: 10,
      },
      listItem: {
        fontSize: 18,
        marginVertical: height * 0.003,
        color: '#000',
        paddingBottom: height * 0.01,
        fontWeight: '600',
      },
      button: {
        padding: 15,
        borderRadius: 5,
        marginVertical: height * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
      },
      buttonText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: calculateFontSize(15),
      },
      buttonInner: {
        backgroundColor: '#A2E7F2',
        borderRadius: 8,
        paddingHorizontal: width * 0.08, 
      },
      buttonInnerText: {
        color: '#000',
        fontWeight: '500',
      },
    });

export default Grocerylistscreen
