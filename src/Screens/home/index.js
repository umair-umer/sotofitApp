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
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {calculateFontSize} from '../../Config/font';
import {useDispatch, useSelector} from 'react-redux';
const {width, height} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {
  clearAuthToken,
  setNutritionplan,
  setWorkoutPlan,
} from '../../../store/action/actions';
import {Loader} from '../../Components/loder';
import axios from 'axios';
import {baseUrl, imagebaseurl} from '../../Config/baseurl';
const imageSize = width * 0.18;
export const Home = ({navigation}) => {
  const [load, setloader] = useState();
  const dispatch = useDispatch(); // Use useDispatch hook to dispatch actions
  const token = useSelector(state => state.authToken);
  const data = useSelector(state => state.workoutPlan?.data);
  const nutrions = useSelector(state => state.nutritionplan);

  console.log('nutritionsdatafrom redux', nutrions);
  const [searchQuery, setSearchQuery] = useState('');
  const [profileData, setProfileData] = useState('');
  const [nutritionData, setNutritionData] = useState(null);
  const [error, setError] = useState('');
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
        setProfileData(response.data.data[0]);
        // console.log(profileData.data.firstName, 'poiuhy');
        setError('');
      } catch (err) {
        console.log('Error fetching profile data:', err);
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
  const items = [
    {
      image: Images.TWOBUILD,
      text: 'SotoFits Workouts',
      onPress: () => {},
    },
    {
      image: Images.KNIFE,
      text: 'SotoEats Nutrition',
      onPress: () => {navigation.navigate('mealplan')},
    },
    {
      image: Images.FIRECIRCLE,
      text: 'Calorie Counter',
      onPress: () => {},
    },
    {
      image: Images.UMAIR,
      text: 'Daily Motivation',
      onPress: () => {},
    },
  ];

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
      // Setup headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          // Cookie: "token=YOUR_TOKEN",
        },
      };

      try {
        const response = await axios.get(
          'https://soto.democlientlink.com/api/v1/sotofit/mobile/home/workout',
          config,
        );
        console.log(response, 'workoutplan');

        dispatch(setWorkoutPlan(response.data)); // Assuming the response is the data you want
      } catch (err) {
        setError(err.message);
        console.error('Error fetching workout plan:', err);
      }
    };
    const fetchNutritionPlan = async () => {
      if (!nutrions || !nutrions.some(plan => plan.dayPlan === activeDay)) {
        const config = {
          headers: {Authorization: `Bearer ${token}`},
        };
        try {
          const response = await axios.get(
            'https://soto.democlientlink.com/api/v1/sotofit/mobile/home/nutrition',
            config,
          );

          setNutritionData(prevData => {
            const existingData = Array.isArray(prevData) ? prevData : [];

            return [...existingData, ...response.data.data];
          });
          dispatch(setNutritionplan(response.data.data));
          console.log(response.data, 'nutrition');
        } catch (error) {
          console.error('Error fetching nutrition plan:', error);
        }
      }
    };

    fetchWorkoutPlan();
    fetchNutritionPlan();
  }, [token]); //
  const handleDayChange = day => {
    setActiveDay(day);
  };
  const [activeDay, setActiveDay] = useState('Mon');
  const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const activeWorkoutPlans = data?.filter(
    workout => workout.dayPlan === activeDay,
  );
  const activeNutritionPlans = Array.isArray(nutrions)
    ? nutrions.filter(nutrition => nutrition.dayPlan === activeDay)
    : [];
  console.log(activeWorkoutPlans, 'dayplan');
  const Item = ({image, text, onPress}) => (
    <View style={styles.crdcontainer}>
      <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
        <Image source={image} style={styles.imageuppersmall} />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <LinearGradient
          colors={['#F855D2', '#E62FFA91', '#FC093ABA']}
          style={styles.container}>
          <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    <Text style={styles.name}>{profileData.firstName}</Text>
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
                  {items.map((item, index) => (
                    <Item
                      key={index}
                      image={item.image}
                      text={item.text}
                      onPress={item.onPress}
                    />
                  ))}
                </ScrollView>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.dayscontainer}>
                {days.map(day => (
                  <TouchableOpacity
                    key={day}
                    style={[
                      styles.dayTab,
                      activeDay === day && styles.activeDayTab,
                    ]}
                    // onPress={() => setActiveDay(day)}

                    onPress={() => handleDayChange(day)}>
                    <Text
                      style={[
                        styles.dayText,
                        activeDay === day && styles.activeDayText,
                      ]}>
                      {day}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Text style={styles.wrkistory}>Workout History</Text>
              <View style={styles.workoutcontainer}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>Today's Workout</Text>
                </View>
                <View style={styles.exercisemain}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {activeWorkoutPlans &&
                      activeWorkoutPlans?.map((ex, index) => {
                        return (
                          <TouchableOpacity
                            key={index}
                            onPress={() =>
                              navigation.navigate('exercisescreen', {
                                exercise: ex,
                                activeWorkoutPlan: ex,
                              })
                            }>
                            <ImageBackground
                              source={{uri: `${imagebaseurl}${ex.firstImage}`}}
                              style={styles.exerciseone}>
                              <View style={styles.lock}>
                                <Entypo
                                  name="lock"
                                  size={15}
                                  color="#000000A1"
                                />
                              </View>
                              <View style={styles.mainslidercontent}>
                                <Text style={styles.sliderhead}>
                                  {ex.title}
                                </Text>
                                <Text style={styles.slidertext}>
                                  {ex.description}
                                </Text>
                              </View>
                            </ImageBackground>
                          </TouchableOpacity>
                        );
                      })}
                  </ScrollView>
                </View>
                <View style={styles.header}>
                  <Text style={styles.headerText2}>Today's Nutrition</Text>
                </View>
                <View style={styles.exercisemain}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  

                    {activeNutritionPlans?.map((nutrition, index) => (

                      <TouchableOpacity key={index} style={styles.nutritionCard} onPress={()=>navigation.navigate('mealplan',{mealplan:nutrition})}>
                      
                            <ImageBackground
                            key={index}
                            source={{uri: `${imagebaseurl}${nutrition.meal[index].firstImage}`}}
                              style={styles.exerciseone}>
                              <View style={styles.premium}>
                                <Text style={styles.premiumText}>Premium</Text>
                              </View>
                              <View style={styles.mainslidercontent}>
                                <Text style={styles.sliderhead}>{nutrition.meal[index].title}</Text>
                                <Text style={styles.slidertext}>
                                  {nutrition.meal[index].desc}
                                </Text>
                              </View>
                            </ImageBackground>
            
                      
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  imageuppersmall: {
    width: width * 0.1,
    height: height * 0.06,
  },
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
    // justifyContent: 'center',
    paddingVertical: height * 0.01,
    backgroundColor: 'transparent',
  },
  dayTab: {
    borderRadius: 20,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.05,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginHorizontal: width * 0.02,
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
  wrkistory: {
    color: 'white',
    fontSize: calculateFontSize(13),
    marginLeft: width * 0.03,
  },
  workoutcontainer: {
    padding: 16,
  },
  exercisemain: {
    marginVertical: height * 0.02,
  },
  exerciseone: {
    width: width * 0.7,
    height: height * 0.23,
    overflow: 'hidden',
    borderRadius: 15,
    resizeMode: 'cover',
    marginRight: width * 0.06,
    justifyContent: 'flex-end',
  },
  mainslidercontent: {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    borderRadius: 15,
  },
  sliderhead: {
    fontSize: calculateFontSize(18),
    fontWeight: '500',
    color: '#fff',
    paddingBottom: height * 0.003,
  },
  slidertext: {
    fontSize: calculateFontSize(13),
    color: 'rgba(231, 231, 231, .7)',
  },
  lock: {
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 4,
    position: 'absolute',
    top: height * 0.02,
    right: width * 0.03,
  },
  premium: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.003,
    position: 'absolute',
    top: height * 0.02,
    left: width * 0.04,
  },
  premiumText: {
    color: '#fff',
    fontSize: calculateFontSize(12),
  },
  headerText2: {
    fontSize: calculateFontSize(22),
    color: '#FFFFFF',
    marginTop: height * 0.04,
  },
});
