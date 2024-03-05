import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {calculateFontSize} from '../../Config/font';
import {useDispatch, useSelector} from 'react-redux';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {clearAuthToken} from '../../../store/action/actions';
import {Loader} from '../../Components/loder';
import axios from 'axios';
import {baseUrl} from '../../Config/baseurl';
const imageSize = width * 0.18;
export const Home = ({navigation}) => {
  const [load, setloader] = useState();
  const dispatch = useDispatch(); // Use useDispatch hook to dispatch actions
  const token = useSelector(state => state.authToken);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      setloader(true);
      const config = {
        method: 'get',
        url: `${baseUrl}/auth/profile`,
        headers: {
          Authorization: `Bearer ${token}`, // Use token from Redux store
        },
      };

      try {
        const response = await axios.request(config);
        console.log('Profile data:', response.data.data);
        setProfileData(response.data.data);
        console.log(profileData, 'poiuhy');
        setError('');
      } catch (err) {
        console.error('Error fetching profile data:', err);
        setError('An error occurred while fetching profile data.');
      } finally {
        setloader(false);
      }
    };

    fetchData();
  }, [token]);

  const handleLogout = () => {
    setloader(true);
    let config = {
      method: 'post',
      url: `${baseUrl}/auth/logout`,
      headers: {
        Authorization: `Bearer ${token}`, // Use token from Redux store
      },
    };

    axios
      .request(config)
      .then(response => {
        console.log('Logout successful:', response.data);
        dispatch(clearAuthToken());
        setloader(false);
      })
      .catch(error => {
        console.error('Logout failed:', error);
      });
  };

  const handleSearch = text => {
    setSearchQuery(text);
  };
  const profiles = [
    {
      name: 'SotoFits Workouts',
      image: Images.workouts,
    },
    {
      name: 'Cardio Champions',
      image: Images.calries,
    },
    {
      name: 'Yoga Masters',
      image: Images.cutler,
    },
    {
      name: 'Strength Series',
      image: Images.motivate,
    },
  ];
  const [activeDay, setActiveDay] = useState('Today');

  const days = ['Today', 'Tue.', 'Wed.', 'Thurs.', 'Fri.'];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {load ? (
        <Loader />
      ) : (
        <LinearGradient
          colors={['#F855D2', '#E62FFA91', '#FC093ABA']}
          style={styles.container}>
          <SafeAreaView style={styles.safeArea}>
            <TouchableOpacity
              style={styles.logoutButtonContainer}
              onPress={handleLogout}>
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
            <View style={styles.header}>
              <View style={styles.hedsubcontainer}>
                <TouchableOpacity
                  style={styles.imgcontainer}
                  onPress={() => navigation.navigate('profilescreen')}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    resizeMode="cover"
                    source={Images.profilepicture}
                  />
                </TouchableOpacity>
                <View style={styles.subhedparentchild}>
                  <Text style={styles.heloo}>hello</Text>
                  <Text style={styles.name}>jhon Adams</Text>
                  <Text style={styles.datetime}>Monday, Sep 21,2023</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: 100,
                  padding: 5,
                }}>
                <Ionicons size={15} color="#fff" name="notifications" />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: height * 0.03,
              }}>
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
              <Feather
                name="sliders"
                color={'white'}
                size={30}
                style={{
                  backgroundColor: 'rgba(162, 231, 242, 1)',
                  padding: 10,
                  borderRadius: 10,
                  ...Platform.select({
                    ios: {
                      backgroundColor: 'rgba(162, 231, 242, 1)',
                      padding: 6,
                      overflow: 'hidden',
                      borderRadius: 10,
                    },
                  }),
                }}
              />
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.crdcontainer}>
                  <TouchableOpacity style={styles.imageContainer}>
                    <Image
                      source={Images.profilepicture} // Replace with your image path
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Text style={styles.text}>SotoFits Workouts</Text>
                </View>
                <View style={styles.crdcontainer}>
                  <TouchableOpacity style={styles.imageContainer}>
                    <Image
                      source={Images.profilepicture} // Replace with your image path
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Text style={styles.text}>SotoEats Nutrition</Text>
                </View>
                <View style={styles.crdcontainer}>
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => navigation.navigate('groceryscreen')}>
                    <Image
                      source={Images.profilepicture} // Replace with your image path
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Text style={styles.text}>Calorie Counter</Text>
                </View>
                <View style={styles.crdcontainer}>
                  <TouchableOpacity style={styles.imageContainer}>
                    <Image
                      source={Images.profilepicture} // Replace with your image path
                      style={styles.image}
                    />
                  </TouchableOpacity>
                  <Text style={styles.text}>Daily Motivation</Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.dayscontainer}>
              {days.map(day => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayTab,
                    activeDay === day && styles.activeDayTab,
                  ]}
                  onPress={() => setActiveDay(day)}>
                  <Text
                    style={[
                      styles.dayText,
                      activeDay === day && styles.activeDayText,
                    ]}>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('exercisescreen')}>
                  <Image style={styles.workoutImage} source={Images.Body} />
                </TouchableOpacity>
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
        </LinearGradient>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        flex: 1,
      },
    }),
  },
  safeArea: {
    // flex: 1,
    padding: 10,
    ...Platform.select({
      ios: {
        flex: 1,
        padding: 10,
      },
    }),
  },
  logoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
    }),
  },
  logout: {
    color: '#fff',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 10,
    fontWeight: '800',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        color: '#fff',
        backgroundColor: 'red',
        padding: 8,
        overflow: 'hidden',
        borderRadius: 10,
        fontWeight: '800',
        alignSelf: 'center',
      },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    }),
  },
  imgcontainer: {
    backgroundColor: 'red',
    width: width * 0.12,
    height: height * 0.06,
    borderRadius: 100,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
        width: width * 0.12,
        height: height * 0.06,
        borderRadius: 100,
        overflow: 'hidden',
      },
    }),
  },
  hedsubcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subhedparentchild: {
    paddingHorizontal: width * 0.04,
  },
  heloo: {
    color: '#fff',
    textTransform: 'capitalize',
  },
  name: {
    color: '#fff',
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  datetime: {
    color: '#fff',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  Searchcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 10,
    width: width * 0.8,
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        overflow: 'hidden',
        width: width * 0.8,
      },
    }),
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
    ...Platform.select({
      ios: {
        backgroundColor: '#A2E7F2',
        borderRadius: imageSize / 2,
        width: imageSize,
        height: imageSize,
        overflow: 'hidden',
        marginBottom: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  },
  image: {
    width: imageSize * 0.6,
    height: imageSize * 0.6,
    resizeMode: 'contain',
    ...Platform.select({
      ios: {
        width: imageSize * 0.6,
        height: imageSize * 0.6,
        resizeMode: 'contain',
        overflow: 'hidden',
      },
    }),
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: calculateFontSize(12),
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        color: '#fff',
        textAlign: 'center',
        fontSize: calculateFontSize(12),
        fontWeight: 'bold',
      },
    }),
  },
  crdcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: width * 0.15,
    width: imageSize + 40,
    height: imageSize + 60,
  },
  dayscontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: height * 0.01,
    backgroundColor: 'transparent',
  },
  dayTab: {
    borderRadius: 20,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  activeDayTab: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)',
  },
  dayText: {
    color: 'white',
    textAlign: 'center',
    fontSize: calculateFontSize(15),
    fontWeight: '800',
  },
  activeDayText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: calculateFontSize(15),
    fontWeight: '800',
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
    height: height * 0.28,
  },
  workoutImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,
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
    paddingHorizontal: width * 0.03,
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
    width: width * 0.1,
    height: height * 0.05,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -(width * 0.01),
    top: -(height * 0.01),
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: calculateFontSize(14),
  },
});
