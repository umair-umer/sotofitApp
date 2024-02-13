import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { calculateFontSize } from '../../Config/font';
import { useDispatch, useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { clearAuthToken } from '../../../store/action/actions';
import { Loader } from '../../Components/loder';
import axios from 'axios';
const imageSize = width * 0.25;
export const Home = ({navigation}) => {

  const [load, setloader] = useState();
  const dispatch = useDispatch(); // Use useDispatch hook to dispatch actions
  const token = useSelector((state) => state.authToken);
  const [searchQuery, setSearchQuery] = useState('');
  const handleLogout = () => {
    setloader(true)
    let config = {
      method: 'post',
      url: 'https://sotofitbackend.azurewebsites.net/api/v1/sotofit/auth/logout',
      headers: {
        'Authorization': `Bearer ${token}`, // Use token from Redux store
      },
    };

    axios.request(config)
      .then((response) => {
        console.log('Logout successful:', response.data);
        dispatch(clearAuthToken());
        setloader(false)
      })
      .catch((error) => {
        console.error('Logout failed:', error);
      });
  };


  const handleSearch = (text) => {
    setSearchQuery(text);

  };
  const [activeDay, setActiveDay] = useState('Today');

  const days = ['Today', 'Tue.', 'Wed.', 'Thurs.', 'Fri.'];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {load ? <Loader /> : <LinearGradient
        colors={['#F855D2', '#E62FFA91', '#FC093ABA']}
        style={styles.container}
      >
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity style={styles.logoutButtonContainer} onPress={handleLogout}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
          <View style={styles.header}>
            <View style={styles.hedsubcontainer}>
              <TouchableOpacity style={styles.imgcontainer}
              onPress={()=>navigation.navigate('profilescreen')}
              >
                <Image style={{ width: "100%", height: "100%" }} resizeMode='cover' source={Images.profilepicture} />
              </TouchableOpacity>
              <View style={styles.subhedparentchild}>
                <Text style={styles.heloo}>hello</Text>
                <Text style={styles.name}>jhon Adams</Text>
                <Text style={styles.datetime}>Monday, Sep 21,2023</Text>
              </View>

            </View>
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 100, padding: 5 }} >
              <Ionicons size={15} color="#fff" name="notifications" />
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: height * 0.03 }}>
            <View style={styles.Searchcontainer}>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="search" size={20} color="#fff" />
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor="#fff"
                onChangeText={handleSearch}
                value={searchQuery}
                keyboardType="default" // set the keyboard type as needed
                returnKeyType="search" // the return key on the keyboard will show 'search'
              />
            </View>
            <Feather name="sliders" color={"white"} size={30} style={{ backgroundColor: "rgba(162, 231, 242, 1)", padding: 10, borderRadius: 10 }} />

          </View>
          <View style={styles.crdcontainer}>
            <View style={styles.imageContainer}>
              <Image
                source={Images.profilepicture} // Replace with your image path
                style={styles.image}
              />
            </View>
            <Text style={styles.text}>SotoFits Workouts</Text>
          </View>
          <View style={styles.dayscontainer}>
            {days.map(day => (
              <TouchableOpacity
                key={day}
                style={[styles.dayTab, activeDay === day && styles.activeDayTab]}
                onPress={() => setActiveDay(day)}
              >
                <Text style={[styles.dayText, activeDay === day && styles.activeDayText]}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}

          </View>
          <Text style={styles.wrkistory}>Workout History</Text>

          <View style={styles.workoutcontainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Today's Workout</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllButton}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.workoutCard}>
              <Image
                style={styles.workoutImage}
                source={Images.Body}

              />
              <Text style={styles.workoutTitle}>Strengthen Chest & Back</Text>
              <Text style={styles.workoutSubtitle}>SotoFits Basic</Text>
              <View style={styles.premiumTag}>
                <Text style={styles.premiumText}>Premium</Text>
              </View>
              <View style={styles.counter}>
                <Text style={styles.counterText}>812</Text>
              </View>
            </View>
            {/* Add more workout cards here */}
          </View>
        </SafeAreaView>
      </LinearGradient>}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 10,

  },
  logoutButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  logout: {
    color: "#fff",
    backgroundColor: "red",
    padding: 8,
    borderRadius: 10,
    fontWeight: "800",
    alignSelf: "center"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  imgcontainer: {
    backgroundColor: "red",
    width: width * 0.12,
    height: height * 0.06,
    borderRadius: 100,
    overflow: "hidden",

  },
  hedsubcontainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  subhedparentchild: {
    paddingHorizontal: width * 0.04,
  },
  heloo: {
    color: "#fff", textTransform: "capitalize"
  },
  name: {
    color: "#fff", fontWeight: "800", textTransform: "capitalize"
  },
  datetime: {
    color: "#fff",
    fontWeight: "700", textTransform: "capitalize"
  },
  Searchcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', 
    borderRadius: 10,
    width: width * 0.8
  },
  iconContainer: {
    padding: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    padding: 10,
  },
  imageContainer: {
    backgroundColor: '#A2E7F2',
    borderRadius: imageSize / 2,
    width: imageSize,
    height: imageSize,
    marginBottom: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: imageSize * 0.6,
    height: imageSize * 0.6,
    resizeMode: 'contain',

  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: calculateFontSize(15),
    fontWeight: 'bold',
  },
  crdcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

    borderRadius: width * 0.15,
    width: imageSize + 40,
    height: imageSize + 60,
    margin: 10,
  },
  dayscontainer: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingVertical: height * 0.01,
    backgroundColor: 'transparent',

  },
  dayTab: {
    borderRadius: 20,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.050,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',

  },
  activeDayTab: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  dayText: {
    color: 'white',
    textAlign: 'center',
    fontSize: calculateFontSize(15),
    fontWeight: "800"
  },
  activeDayText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: calculateFontSize(15),
    fontWeight: "800"
  },
  wrkistory: {
    color: 'white',

    fontSize: calculateFontSize(10),

    marginLeft: width * 0.03,
  },
  workoutcontainer: {


    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: calculateFontSize(24),
    color: '#FFFFFF',
  },
  workoutCard: {
    backgroundColor: 'rgba(0, 0, 0,0.2)',
    borderRadius: 8,
    marginTop: height * 0.02,
    overflow: 'hidden',
  },
  workoutImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.8,
  },
  workoutTitle: {
    fontSize: calculateFontSize(18),
    color: '#FFFFFF',
    padding: 16,

  },
  workoutSubtitle: {
    fontSize: calculateFontSize(14),
    color: '#FFFFFF',
    paddingBottom: height * 0.01,
    paddingHorizontal: width * 0.03
  },
  premiumTag: {
    backgroundColor: '#F67280',
    padding: 6,
    borderRadius: 15,
    position: 'absolute',
    right: width * 0.019,
    top: height * 0.019,
  },
  premiumText: {
    color: '#FFFFFF',
    fontSize: calculateFontSize(14),
  },
  seeAllButton: {
    fontSize: calculateFontSize(14),
    color: '#FFFFFF',
    textDecorationLine: 'underline',
  },
  counter: {
    backgroundColor: '#812',
    width: width * 0.10,
    height: height * 0.05,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -(width * 0.010),
    top: -(height * 0.010),
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: calculateFontSize(14),
  },

})