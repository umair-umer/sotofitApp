import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Images from '../../Config/im';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {calculateFontSize} from '../../Config/font';
const {width, height} = Dimensions.get('window');

import LinearGradient from 'react-native-linear-gradient';
import {imagebaseurl} from '../../Config/baseurl';
export const MeasPlan = ({route, navigation}) => {
  const [mealPlanData, setMealPlanData] = useState(route.params?.mealplan);
  const [selectedDay, setSelectedDay] = useState(mealPlanData.dayPlan);
  // const meal=route.params
  // const {calories, carbs, fat, protein, title, dayPlan, meal} =
  //   route.params?.mealplan;
  console.log(mealPlanData.meal, 'statewaladata');
  // console.log("mealplan",meal);
  const days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'sat', 'sun'];

  return (
    <ImageBackground
      style={{flex: 1}}
      source={Images.bgfast}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.header}>
          <Ionicons name="chevron-back-outline" size={29} color="white" />
          <Text style={styles.hedertext}>home</Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.tabContainer}>
            {days.map((day, index) => (
              <View
                key={index}
                style={[
                  styles.tab,
                  selectedDay === day ? styles.activeTab : {},
                ]}
                onPress={() => setSelectedDay(selectedDay)}>
                <Text
                  style={[
                    styles.tabText,
                    selectedDay === day ? styles.activeTabText : {},
                  ]}>
                  {day}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <LinearGradient
          colors={['#F855D2', '#E62FFA91', '#FC093ABA']}
          style={styles.gradient}>
          <Text style={styles.todaymacromeal}>
            {mealPlanData.dayPlan}, {mealPlanData.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.colriescount}>
                {mealPlanData.calories} Calories{' '}
              </Text>
              <Text style={styles.colriescount}>
                Protein: {mealPlanData.protein} grams
              </Text>
              <Text style={styles.colriescount}>
                Fat: {mealPlanData.fat} grams
              </Text>
              <Text style={styles.colriescount}>
                Carbs: {mealPlanData.carbs} grams
              </Text>
            </View>
            <View>
              <Image source={Images.chart} />
            </View>
          </View>
          <ScrollView style={{height: height}}>
            {mealPlanData.meal.map((mealitem, mealindex) => {
              console.log(mealitem, 'mapkander');
              return (
                <>
                  <View key={mealindex} style={styles.bfast}>
                    <Text style={styles.bftext}>{mealitem.title}</Text>
                  </View>
                  {mealitem.items.map((item, index) => {
                    return (
                      <View style={styles.itemview}>
                        <View
                          style={{
                            width: width * 0.5,
                            height: height * 0.2,
                            backgroundColor: 'red',
                            overflow: 'hidden',
                            borderRadius: 15,
                          }}>
                          <Image
                            style={{width: '100%', height: '100%'}}
                            source={{uri: `${imagebaseurl}${item.image}`}}
                            resizeMode="cover"
                          />
                        </View>
                        <View
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            width: width * 0.35,
                            paddingHorizontal: width * 0.02,
                            marginHorizontal: width * 0.02,
                            paddingVertical: height * 0.02,
                            borderRadius: 15,
                          }}>
                          <Text style={styles.heditem2}>{item.name}</Text>
                          <Text style={styles.heditem2}>
                            {item.calories} calaories
                          </Text>
                          <Text style={styles.heditem2}>
                            Protein: {item.protein}{' '}
                          </Text>
                          <Text style={styles.heditem2}>Fat: {item.fat} </Text>
                          <Text style={styles.heditem2}>
                            Carbs:{item.carbs}{' '}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </>
              );
            })}

            {/* <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View>
            <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View>
            <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View>
            <View style={styles.bfast}>
              <Text style={styles.bftext}>Snacks</Text>
            </View>
            <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View>
            <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View>
            <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View>
            <View style={styles.bfast}>
              <Text style={styles.bftext}>Dinner</Text>
            </View>
            <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View>
            <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View>
            <View style={styles.itemview}>
              <View
                style={{
                  backgroundColor: 'red',
                  overflow: 'hidden',
                  borderRadius: 15,
                }}>
                <Image source={Images.eggwhites} resizeMode="contain" />
              </View>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: width * 0.35,
                  paddingHorizontal: width * 0.02,
                  marginHorizontal: width * 0.02,
                  borderRadius: 15,
                }}>
                <Text style={styles.heditem2}>Egg Whites</Text>
                <Text style={styles.heditem2}>160 calaories</Text>
                <Text style={styles.heditem2}>Protein: 9 grams</Text>
                <Text style={styles.heditem2}>Fat: 2 grams </Text>
                <Text style={styles.heditem2}>Carbs: 0 grams</Text>
              </View>
            </View> */}
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  gradient: {
    marginTop:height*0.04,
    height: height * 0.9,
    paddingBottom: height * 0.09,
    width: width,
    borderTopLeftRadius: 25,
   borderTopRightRadius:25
  },
  header: {
    marginVertical: height * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hedertext: {
    color: 'white',
    fontSize: calculateFontSize(20),
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5) ',
    width: width * 0.9,
    height: height * 0.05,
    alignItems: 'center',
    borderRadius: 100,
  },
  tab: {
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    backgroundColor: 'transparent',
    marginHorizontal: width * 0.0,
  },
  activeTab: {
    width: width * 0.2,
    height: height * 0.04,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: calculateFontSize(10),
    color: 'white',
  },
  activeTabText: {
    fontSize: calculateFontSize(10),
    color: 'white',
  },
  todaymacromeal: {
    fontSize: calculateFontSize(15),
    color: 'white',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.02,
  },
  colriescount: {
    fontSize: calculateFontSize(15),
    color: 'white',
  },
  bfast: {
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: '#E02020',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.03,
    borderRadius: 15,
  },
  bftext: {
    fontSize: calculateFontSize(15),
    color: 'black',
  },
  itemview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: height * 0.02,
  },
  heditem: {
    fontSize: calculateFontSize(18),
    color: '#fff',
  },
  heditem2: {
    fontSize: calculateFontSize(12),
    color: '#fff',
    marginVertical: height * 0.002,
  },
});
