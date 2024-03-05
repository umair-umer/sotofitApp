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

const {width, height} = Dimensions.get('window');

function Goalfifthscreen({navigation,route}) {

  const { selectedFlexibility, selectedJobCondition, selectedEnergyTime, occupation, jobConditionDetails } = route.params;
  const [mealTracking, setMealTracking] = useState('');
  const [personalizedNutritionPlan, setPersonalizedNutritionPlan] = useState('');
  const [specificAllergies, setSpecificAllergies] = useState('');

  const handleMealTrackingSelection = option => {
    setMealTracking(option === mealTracking ? '' : option);
  };

  const handlePersonalizedNutritionPlanSelection = option => {
    setPersonalizedNutritionPlan(
      option === personalizedNutritionPlan ? '' : option,
    );
  };

  const handleSpecificAllergiesSelection = option => {
    setSpecificAllergies(option === specificAllergies ? '' : option);
  };

  return (
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
              DO YOU TRACK YOUR MEALS/MACROS?
            </Text>
            <View style={styles.forinputs}>
              <TouchableOpacity
                style={[
                  styles.inputbuttons,
                  mealTracking === 'Yes' ? styles.choosed : null,
                ]}
                onPress={() => handleMealTrackingSelection('Yes')}>
                <Text
                  style={[
                    styles.inputbutton,
                    mealTracking === 'Yes' && styles.selectedText,
                  ]}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.inputbuttons,
                  mealTracking === 'Sometimes' ? styles.choosed : null,
                ]}
                onPress={() => handleMealTrackingSelection('Sometimes')}>
                <Text
                  style={[
                    styles.inputbutton,
                    mealTracking === 'Sometimes' && styles.inputbuttonchoosed,
                  ]}>
                  Sometimes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.inputbuttons,
                  mealTracking === 'No' ? styles.choosed : null,
                ]}
                onPress={() => handleMealTrackingSelection('No')}>
                <Text
                  style={[
                    styles.inputbutton,
                    mealTracking === 'No' && styles.selectedText,
                  ]}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={[styles.information, styles.white]}>
              ARE YOU INTERESTED IN HAVING A PERSONALIZED NUTRITION PLAN?
            </Text>
            <View style={styles.forinputs}>
              <TouchableOpacity
                style={[
                  styles.inputbuttons,
                  personalizedNutritionPlan === 'Yes' ? styles.choosed : null,
                ]}
                onPress={() => handlePersonalizedNutritionPlanSelection('Yes')}>
                <Text
                  style={[
                    styles.inputbutton,
                    personalizedNutritionPlan === 'Yes' && styles.selectedText,
                  ]}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.inputbuttons,
                  personalizedNutritionPlan === 'Possibly'
                    ? styles.choosed
                    : null,
                ]}
                onPress={() =>
                  handlePersonalizedNutritionPlanSelection('Possibly')
                }>
                <Text
                  style={[
                    styles.inputbutton,
                    personalizedNutritionPlan === 'Possibly' &&
                      styles.inputbuttonchoosed,
                  ]}>
                  Possibly
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.inputbuttons,
                  personalizedNutritionPlan === 'No' ? styles.choosed : null,
                ]}
                onPress={() => handlePersonalizedNutritionPlanSelection('No')}>
                <Text
                  style={[
                    styles.inputbutton,
                    personalizedNutritionPlan === 'No' && styles.selectedText,
                  ]}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={[styles.information, styles.white]}>
              ARE YOU INTERESTED IN HAVING A PERSONALIZED NUTRITION PLAN?
            </Text>
            <View style={[styles.forinputs, styles.forinputstwo]}>
              <TouchableOpacity
                style={[
                  styles.inputbuttons,
                  specificAllergies === 'Yes' ? styles.choosed : null,
                ]}
                onPress={() => handleSpecificAllergiesSelection('Yes')}>
                <Text
                  style={[
                    styles.inputbutton,
                    specificAllergies === 'Yes' && styles.selectedText,
                  ]}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.inputbuttons,
                  specificAllergies === 'No' ? styles.choosed : null,
                ]}
                onPress={() => handleSpecificAllergiesSelection('No')}>
                <Text
                  style={[
                    styles.inputbutton,
                    specificAllergies === 'No' && styles.selectedText,
                  ]}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              WHAT ARE YOUR FAVORITE FOODS?
            </Text>
            <TextInput style={styles.textarea} />
          </View>
          <View style={styles.forpad2}>
            <Text style={[styles.information, styles.white]}>
              WHAT FOODS DO YOU DISLIKE AND CANNOT EAT ON A DIET?
            </Text>
            <TextInput style={styles.textarea} />
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              LIST ANY SPECIFIC ALLERGIES OR DIETARY RESTRICTIONS YOU HAVE
              (I.E., VEGETARIAN, GLUTEN-FREE, NO LACTOSE, ETC.)
            </Text>
            <TextInput style={styles.textarea} />
          </View>
          <View style={styles.forpad2}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'center'}}
              onPress={() => navigation.navigate('Goalsrnsix',{
                selectedFlexibility,
                selectedJobCondition,
                selectedEnergyTime,
                occupation,
                jobConditionDetails,
                mealTracking,
                personalizedNutritionPlan,
                specificAllergies,
              })}>
              <Text style={styles.button}>Continue</Text>
            </TouchableOpacity>
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
    paddingHorizontal: 30,
  },
  information: {
    color: '#6f6868',
    fontSize: calculateFontSize(16),
    marginTop: 10,
  },
  forinputs: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    backgroundColor: '#201b1c',
    borderRadius: 10,
    padding: 10,
  },
  textarea: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    paddingHorizontal: 8,
    marginVertical: 8,
    height: height * 0.07,
  },
  button: {
    backgroundColor: '#a2e7f2',
    paddingVertical: 10,
    fontSize: calculateFontSize(16),
    borderRadius: 10,
    color: '#000',
    width: width * 0.3,
    textAlign: 'center',
    marginVertical: 20,
  },
  inputbutton: {
    fontSize: calculateFontSize(15),
    color: '#fff',
  },
  inputbuttons: {
    textAlign: 'center',
    paddingVertical: 5,
  },
  white: {
    color: '#fff',
  },
  choosed: {
    backgroundColor: '#A2E7F2',
    borderRadius: 10,
    padding: 20,
  },
  inputbuttonchoosed: {
    textAlign: 'center',
    color: '#000',
  },
  forinputstwo: {
    width: width * 0.7,
  },
  selectedText: {
    color: '#000', // Change font color to black for selected option
  },
});

export default Goalfifthscreen;
