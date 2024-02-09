import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {calculateFontSize} from '../../Config/font';
import Images from '../../Config/im';

const Introsliderscreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.INTRO}
        style={{width: '100%', height: '100%', alignItems: 'center'}}
        resizeMode="cover">
        <View style={styles.header}>
          <Text style={styles.headtext}>SotoFits</Text>
        </View>

        <View style={styles.headerslogan}>
          <Text style={styles.slogan}>
            Get Started with your Free Personal Fitness Assessment
          </Text>
        </View>

        <View style={styles.btns}>
          <TouchableOpacity 
            style={styles.assembtn}
            onPress={()=>navigation.navigate('Goalscrn')}
            >
            <Text style={styles.btntxt}>Take Assessment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linktxt} 
          onPress={()=>navigation.navigate('home')}>
            <Text style={styles.txtlink}>Skip assessment for now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.about}>
          <Text style={styles.aboutTxt}>
            The personal fitness assessment will help match your workout and
            meal plan to your fitness level and goals.
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64ffda',
    alignItems: 'center',
  },
  header: {
    width: width * 0.6,
    height: height * 0.08,
    marginTop: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headtext: {
    fontSize: calculateFontSize(34),
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#fff',
  },
  headerslogan: {
    width: width * 0.6,
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slogan: {
    fontSize: calculateFontSize(16),
    fontWeight: '700',
    color: '#fff',
  },
  btns: {
    flexDirection: 'column',
    marginVertical: height * 0.06,
  },
  assembtn: {
    width: width * 0.6,
    height: height * 0.06,
    backgroundColor: '#A2E7F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btntxt: {
    color: '#000',
    fontWeight: '500',
  },
  linktxt: {
    width: width * 0.6,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txtlink: {
    color: '#fff',
    fontSize: calculateFontSize(14),
  },
  about: {
    width: width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  aboutTxt: {
    fontSize: calculateFontSize(20),
    color: '#fff',
    fontWeight: '400',
  },
});

export default Introsliderscreen;
