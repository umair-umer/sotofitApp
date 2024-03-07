import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Images from '../../Config/im';
import {calculateFontSize} from '../../Config/font';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthToken, setIsAssessment} from '../../../store/action/actions';
import axios from 'axios';
import {baseUrl} from '../../Config/baseurl';
import {Loader} from '../../Components/loder';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

function Goalsixthscreen({navigation, route}) {
  const userData = route.params?.data;
  const dispatch = useDispatch();
  const token = useSelector(state => state.authToken);
  const [isLoading, setisLoading] = useState(false);
  // dispatch(setAuthToken(token));
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [additionalDetails, setAdditionalDetails] = useState('');
  const isAssessment = useSelector(state => state?.isAssessment);

  // console.log('userData------->>>', userData);

  const handleSubmit = async () => {
    setisLoading(true);
    const dataToSend = JSON.stringify({
      age: userData?.age,
      gender: userData?.gender,
      height: userData?.height,
      weight: userData?.weight,
      fitnessInfo: userData?.goal?.join(),
      fitnessGoalDesc: userData?.challenges,
      goalsImportance: userData?.importanceLevel,
      barriers: userData?.barriers?.join(),
      barrierDesc: userData?.challenges2,
      lifeStyle: userData?.readiness,
      goalMotivation: userData?.confidenceLevel,
      seeingResults: userData?.motivationScores['Seeing Results'],
      beingHeldAccountable:
        userData?.motivationScores['Being Held Accountable'],
      praiseOrRewards: userData?.motivationScores['Praises/Rewards'],
      havingFun: userData?.motivationScores['Having Fun'],
      feelingBetterAboutYourself:
        userData?.motivationScores['Feeling better about yourself'],
      motivationOther: userData?.otherMotivation, //condition lagana hai
      exerciseFrequency: userData?.exercise,
      exerciseTypes: userData?.selectedExercises?.join(),
      exerciseTypeOther: userData?.otherExercise, //condition lagana hai
      exerciseDuration: userData?.timesExercises,
      runningFrequency: userData?.outDoors,
      flexibility: userData?.selectedFlexibility,
      occupation: userData?.occupation,
      jobAllow: userData?.allowJobs,
      jobDesc: userData?.jobConditionDetails,
      mostEnergizedTime: userData?.selectedEnergyTime,
      trackMeals: userData?.mealTracking,
      interestedInNutritionPlan: userData?.personalizedNutritionPlan,
      eatingDisorder: userData?.specificAllergies,
      favoriteFoods: userData?.favoriteFood,
      dislikedFoods: userData?.diet,
      dietRestriction: userData?.allergires,
      instructorRef: selectedOptions?.join(),
      instructorDesc: additionalDetails,
    });

    // console.log('userComplete details--------->', JSON.parse(dataToSend));
    try {
      await axios
        .post(`${baseUrl}/mobile/home/assessment`, dataToSend, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async res => {
          console.log('response submit assessment', res.data);
          if (res.data.success) {
            setisLoading(false);
            navigation.navigate('home');
            showMessage({
              message: 'Successfully Submitted!',
              icon: 'success',
              type: 'success',
              animated: true,
              floating: true,
            });
          } else {
            setisLoading(false);
            showMessage({
              message: 'Something went wrong! Please try again later.',
              icon: 'warning',
              type: 'warning',
              animated: true,
              floating: true,
            });
          }
        })
        .catch(err => {
          setisLoading(false);
          console.log('error submit assessment', err);
        });
    } catch (e) {
      setisLoading(false);
      console.log('catch error in submitAssessment', e);
      showMessage({
        message: 'Something went wrong! Please try again later.',
        icon: 'danger',
        type: 'danger',
        animated: true,
        floating: true,
      });
    }
  };

  const options = [
    'Health/Wellness (General)',
    'I am preparing for a competition (if so, enter the type of competition in the comments box below)',
    'I want an awesome workout routine- personalized split schedule',
    'I want a personalized macro/nutrition plan',
    'I want to learn the basics of macro/calorie tracking',
    'I want to change up my lifestyle and become the best version of myself.',
    "I'm Ready to get SotoFit!",
  ];

  const toggleOption = option => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <SafeAreaView>
        <ImageBackground source={Images.Goal} style={styles.background}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <View style={styles.forpad1}>
              <Text style={styles.heading}>
                <Text style={{fontStyle: 'italic'}}>SotoFits</Text> Personal
                Fitness Assessment
              </Text>
            </View>
            <View style={styles.forpad2}>
              <Text style={styles.information}>
                I AM SEEKING A SOTOFITS INSTRUCTOR FOR:
              </Text>
              <View style={{marginVertical: 16}}>
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.inputbuttons,
                      selectedOptions.includes(option) && styles.selectedInput,
                      {marginBottom: 10},
                    ]}
                    onPress={() => toggleOption(option)}>
                    <Text style={styles.inputbutton}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.forpad2}>
              <Text style={styles.information}>
                PROVIDE ANY ADDITIONAL DETAILS ABOUT YOUR SELECTIONS ABOVE.
              </Text>
              <TextInput
                placeholder="PROVIDE ANY ADDITIONAL DETAILS ABOUT YOUR SELECTIONS ABOVE"
                placeholderTextColor={'gray'}
                style={styles.textarea}
                onChangeText={setAdditionalDetails}
                value={additionalDetails}
                numberOfLines={2}
              />
            </View>
            <View style={styles.forpad2}>
              <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'center'}}
                onPress={handleSubmit}>
                <Text style={styles.button}>Finish</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  forpad1: {
    padding: 30,
  },
  heading: {
    color: '#fff',
    fontSize: calculateFontSize(29),
  },
  forpad2: {
    paddingHorizontal: width * 0.07,
  },
  information: {
    color: '#6f6868',
    fontSize: calculateFontSize(16),
    marginTop: height * 0.02,
  },
  forinputs: {
    flexDirection: 'row',
    marginTop: height * 0.01,
  },
  textarea: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    marginVertical: 25,
    textAlignVertical: 'top',
    textAlign: 'left',
    paddingLeft: 13,
  },
  button: {
    backgroundColor: '#a2e7f2',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.06,
    fontSize: calculateFontSize(16),
    borderRadius: 10,
    color: '#000',
    width: width * 0.3,
    textAlign: 'center',
    marginVertical: height * 0.02,
  },
  inputbutton: {
    fontSize: calculateFontSize(15),
    color: '#fff',
  },
  inputbuttons: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    paddingHorizontal: width * 0.03,
    textAlign: 'center',
    paddingVertical: height * 0.01,
  },
  selectedInput: {
    backgroundColor: '#a2e7f2',
  },
});

export default Goalsixthscreen;
