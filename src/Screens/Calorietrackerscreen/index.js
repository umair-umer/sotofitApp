import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im';
import {calculateFontSize} from '../../Config/font';
const {width, height} = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import jestConfig from '../../../jest.config';
import navigation from '../../Config/navigation';

function Calorietrackerscreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.GROCERYBACK}
        style={styles.backgroundImage}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Ionicons name="chevron-back-outline" size={22} color="white" />
              <Text style={styles.headerText}>Home</Text>
            </TouchableOpacity>
            <MaterialCommunityIcons
              name="fire-circle"
              size={50}
              color="#414244"
            />
          </View>
          <View style={styles.content}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Calorie Tracker</Text>
              <View style={styles.topicon}>
                <Ionicons name="settings-sharp" size={20} color="#000" />
              </View>
            </View>
          </View>
          <View style={styles.listmain}>
            <View>
              <Text style={styles.charthead}>Calories Consumed:</Text>
              <Text style={styles.chartnumber}>856</Text>
              <Text style={styles.charthead}>Calories Remaining:</Text>
              <Text style={styles.chartnumber}>400</Text>
            </View>
            <View>
              <Image source={Images.CALORIECHART} style={styles.chart}></Image>
            </View>
          </View>
          <View style={styles.bottompad}>
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.search}
                placeholder="Search for a Food..."
                placeholderTextColor={'#fff'}
              />
              <View style={{position: 'absolute', right: 20, top: 8}}>
                <Ionicons name="search-outline" size={30} color="#5E5E5E" />
              </View>
            </View>
            <TouchableOpacity
              style={styles.meal}
              onPress={() => navigation.navigate('food')}>
              <View style={{position: 'relative'}}>
                <Text style={styles.mealtext}>Link Meal Plan</Text>
                <View style={{position: 'absolute', right: 40, bottom: 0}}>
                  <Fontisto name="locked" size={22} color="#464646" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomdescmain}>
            <View style={styles.singlebottomdesc}>
              <Text style={styles.bottomdesc}>Breakfast:</Text>
              <Text style={styles.chartnumber}>400</Text>
              <MaterialIcons name="navigate-next" size={25} color="#fff" />
              <TouchableOpacity>
                <Text style={styles.descmore}>See Macros</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.singlebottomdesc}>
              <Text style={styles.bottomdesc}>Lunch:</Text>
              <Text style={styles.chartnumber}>600</Text>
              <MaterialIcons name="navigate-next" size={25} color="#fff" />
              <TouchableOpacity>
                <Text style={styles.descmore}>See Macros</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.singlebottomdesc}>
              <Text style={styles.bottomdesc}>Dinner:</Text>
              <Text style={styles.chartnumber}>0</Text>
              <MaterialIcons name="navigate-next" size={25} color="#fff" />
              <TouchableOpacity>
                <Text style={styles.descmore}>See Macros</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.singlebottomdesc}>
              <Text style={styles.bottomdesc}>Snacks:</Text>
              <Text style={styles.chartnumber}>168</Text>
              <MaterialIcons name="navigate-next" size={25} color="#fff" />
              <TouchableOpacity>
                <Text style={styles.descmore}>See Macros</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
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
    paddingTop: height * 0.06,
    paddingHorizontal: width * 0.08,
  },
  topicon: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 7,
  },
  title: {
    fontSize: calculateFontSize(18),
    color: '#fff',
  },
  listmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.06,
    marginBottom: height * 0.04,
    alignItems: 'center',
    paddingHorizontal: width * 0.02,
  },
  chart: {
    width: 200,
    height: 120,
  },
  charthead: {
    fontSize: calculateFontSize(16),
    fontWeight: '500',
    color: '#fff',
  },
  chartnumber: {
    fontSize: calculateFontSize(14),
    color: '#fff',
    backgroundColor: '#414141',
    width: width * 0.3,
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical: height * 0.01,
    marginBottom: height * 0.02,
    marginTop: height * 0.01,
  },
  bottompad: {
    paddingHorizontal: width * 0.08,
  },
  search: {
    backgroundColor: '#000',
    fontSize: calculateFontSize(14),
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
    color: '#fff',
    ...Platform.select({
      ios: {
        backgroundColor: '#000',
        fontSize: calculateFontSize(14),
        borderRadius: 10,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.02,
        marginBottom: height * 0.02,
        color: '#fff',
      },
    }),
  },
  bottomdescmain: {
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.04,
  },
  meal: {
    backgroundColor: 'rgba(162, 231, 242, 1)',
    borderRadius: 5,
    paddingVertical: height * 0.01,
    marginHorizontal: width * 0.09,
  },
  mealtext: {
    textAlign: 'center',
    color: '#000',
    fontSize: calculateFontSize(14),
    fontWeight: '500',
  },
  bottomdesc: {
    fontSize: calculateFontSize(26),
    color: 'rgba(0, 0, 0, 0.5)',
    width: width * 0.36,
    fontWeight: '600',
  },
  singlebottomdesc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.001,
  },
  descmore: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    fontWeight: '500',
  },
});

export default Calorietrackerscreen;
