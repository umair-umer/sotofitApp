import React from 'react';
import {
  SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground, TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im'
import { calculateFontSize } from '../../Config/font';
const { width, height } = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Breakfastscreen() {
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
            <Text style={styles.title}>Cristina's Breakfast</Text>
            <View style={styles.topicon}>
              <Ionicons
                name='settings-sharp'
                size={20}
                color='#000'
              />
            </View>
          </View>
          <View style={styles.maingraph}>
            <View>
              <Image source={Images.BREAKFASTGRAPH} style={styles.graphimage}></Image>
            </View>
            <View>
              <View style={styles.singlegraphdesc}>
                <Text style={styles.graphdesc}>Total Calories:</Text>
                <Text style={styles.graphshow}>350</Text>
              </View>
              <View style={styles.singlegraphdesc}>
                <Text style={styles.graphdesc}>Carbs:</Text>
                <Text style={[styles.graphshow, styles.lightgrey]}>60g</Text>
              </View>
              <View style={styles.singlegraphdesc}>
                <Text style={styles.graphdesc}>Fat:</Text>
                <Text style={[styles.graphshow, styles.yellow]}>20g</Text>
              </View>
              <View style={styles.singlegraphdesc}>
                <Text style={styles.graphdesc}>Protien:</Text>
                <Text style={[styles.graphshow, styles.purple]}>20g</Text>
              </View>
            </View>
          </View>
          <View style={styles.listmain}>
            <Text style={styles.listhead}>Logged Foods:</Text>
            <Text style={styles.listItem}>- 2x Egg</Text>
            <Text style={styles.listItem}> -1x Black Coffee</Text>
            <Text style={styles.listItem}>-1x Dave's White Bread (Slice)</Text>
            <TouchableOpacity>
              <Text style={styles.listbutton}>+ add Food</Text>
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
    paddingTop: height * 0.05,
    paddingHorizontal: width * 0.04,
  },
  topicon: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 7,
  },
  title: {
    fontSize: calculateFontSize(22),
    fontWeight: '500',
    color: '#fff'
  },
  listmain: {
    marginHorizontal: width * 0.06,
    backgroundColor: 'rgba(162, 231, 242, 0.7)',
    height: height * 0.26,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    marginTop: height * 0.06,
    marginBottom: height * 0.08,
    borderRadius: 10,
  },
  listhead: {
    fontSize: 22,
    marginBottom: height * 0.03,
    color: '#fff',
    fontWeight: '500',
  },
  listItem: {
    fontSize: 18,
    marginVertical: height * 0.002,
    color: '#fff',
  },
  listbutton: {
    fontSize: 18,
    marginTop: height * 0.03,
    color: '#000',
    fontWeight: '500',
  },
  singlegraphdesc: {
    flexDirection: 'row',
    marginBottom: height * 0.02,
  },
  graphimage: {
    width: 150,
    height: 140,
  },
  graphdesc: {
    color: '#fff',
    fontSize: calculateFontSize(18),
    paddingLeft: width * 0.02,
    fontWeight: '500',
    width: width * 0.36,
  },
  graphshow: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    backgroundColor: '#414141',
    borderRadius: 10,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.003,
  },
  maingraph: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.06,
  },
  yellow: {
    backgroundColor: '#F7B500',
  },
  purple: {
    backgroundColor: '#B620E0',
  },
  lightgrey: {
    backgroundColor: '#6D7278',
  },
});

export default Breakfastscreen