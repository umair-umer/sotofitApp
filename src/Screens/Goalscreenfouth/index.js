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

function Goalfourthscreen({navigation}) {
  const [selectedFlexibility, setSelectedFlexibility] = useState('');
  const [selectedJobCondition, setSelectedJobCondition] = useState('');
  const [selectedEnergyTime, setSelectedEnergyTime] = useState('');
  const [occupation, setOccupation] = useState('');
  const [jobConditionDetails, setJobConditionDetails] = useState('');

  // Function to handle selection for the flexibility question
  const handleFlexibilitySelection = option => {
    setSelectedFlexibility(prevSelection =>
      prevSelection === option ? '' : option,
    );
  };

  // Function to handle selection for the job condition question
  const handleJobConditionSelection = option => {
    setSelectedJobCondition(prevSelection =>
      prevSelection === option ? '' : option,
    );
  };

  // Function to handle selection for the most energized time of day question
  const handleEnergyTimeSelection = option => {
    setSelectedEnergyTime(prevSelection =>
      prevSelection === option ? '' : option,
    );
  };

  // Simplifying the display of options with a single function
  const renderOption = (optionText, selectedState, selectionHandler) => (
    <TouchableOpacity
      style={[
        styles.inputbuttons,
        selectedState === optionText ? styles.selectedInput : {},
        {marginBottom: height * 0.02},
      ]}
      onPress={() => selectionHandler(optionText)}>
      <Text
        style={[
          styles.inputbutton,
          selectedState === optionText ? styles.selectedText : {},
        ]}>
        {optionText}
      </Text>
    </TouchableOpacity>
  );

  // Simplifying the display of options with a single function
  const renderEnergizedTimeOption = optionText => (
    <TouchableOpacity
      style={[
        styles.inputbuttons,
        selectedEnergyTime === optionText ? styles.selectedInput : {},
        {marginBottom: height * 0.01},
      ]}
      onPress={() => handleEnergyTimeSelection(optionText)}>
      <Text
        style={[
          styles.inputbutton,
          styles.inputsamelinefull,
          selectedEnergyTime === optionText ? styles.selectedText : {},
        ]}>
        {optionText}
      </Text>
    </TouchableOpacity>
  );

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
              HOW EASILY CAN YOU BEND OVER AND TOUCH YOUR TOES?
            </Text>
            <View style={styles.forinputs}>
              {renderOption(
                'Not even close',
                selectedFlexibility,
                handleFlexibilitySelection,
              )}
              {renderOption(
                'Nearly/Almost',
                selectedFlexibility,
                handleFlexibilitySelection,
              )}
              {renderOption(
                'Just Barely',
                selectedFlexibility,
                handleFlexibilitySelection,
              )}
              {renderOption(
                'Easily',
                selectedFlexibility,
                handleFlexibilitySelection,
              )}
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>LIFESTYLE</Text>
            <TextInput
              style={styles.textarea}
              placeholder="What is your occupation?"
              placeholderTextColor="#fff"
              value={occupation}
              onChangeText={setOccupation}
            />
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>DOES YOUR JOB ALLOW FOR?</Text>
            <View style={styles.forinputs}>
              <TouchableOpacity style={styles.inputbuttons}>
                <Text style={styles.inputbutton}>
                  Extended Periods of Sitting
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.forinputs}>
              <TouchableOpacity style={styles.inputbuttons}>
                <Text style={styles.inputbutton}>
                  Extended Periods of Sitting
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.forinputs}>
              <TouchableOpacity style={styles.inputbuttons}>
                <Text style={styles.inputbutton}>
                  Extended Periods of Repetitive Movement
                </Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.textarea}
              placeholder="Please describe the above in more detail."
              placeholderTextColor="#fff"
              value={jobConditionDetails}
              onChangeText={setJobConditionDetails}
            />
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              WHAT TIME OF DAY ARE YOU MOST ENERGIZED?
            </Text>
            <View style={styles.forinputs}>
              {renderEnergizedTimeOption('Morning (6:00am - 11:00am)')}
              {renderEnergizedTimeOption(
                'Mid-day/Afternoon (11:00am - 5:00pm)',
              )}
              {renderEnergizedTimeOption('Evening (5:00pm - 10:00pm)')}
              {renderEnergizedTimeOption('Night (after 10:00pm)')}
            </View>
          </View>
          <View style={styles.forpad2}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'center'}}
              onPress={() =>
                navigation.navigate('Goalsrnfive', {
                  selectedFlexibility,
                  selectedJobCondition,
                  selectedEnergyTime,
                  occupation,
                  jobConditionDetails,
                })
              }>
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
    marginTop: height * 0.008,
  },
  input: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    paddingHorizontal: width * 0.08,
    textAlign: 'center',
    paddingVertical: height * 0.05,
    marginRight: 10,
  },
  forinputs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: height * 0.008,
  },
  textarea: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    paddingHorizontal: width * 0.04,
    marginVertical: width * 0.04,
    height: height * 0.09,
  },
  button: {
    backgroundColor: '#a2e7f2',
    paddingVertical: 10,
    paddingHorizontal: 6,
    fontSize: calculateFontSize(16),
    borderRadius: 10,
    color: '#000',
    width: width * 0.3,
    textAlign: 'center',
    marginVertical: height * 0.04,
  },
  inputbutton: {
    fontSize: calculateFontSize(15),
    color: '#fff',
    marginVertical: height * 0.004,
  },
  inputbuttons: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    paddingHorizontal: 13,
    textAlign: 'center',
    paddingVertical: height * 0.005,
    marginRight: 10,
  },
  inputsameline: {
    width: width * 0.4,
    paddingHorizontal: 18,
  },
  inputsamelinefull: {
    width: width * 0.8,
    paddingHorizontal: 5,
  },
  selectedInput: {
    backgroundColor: '#a2e7f2', // Highlight for selected option
  },
  selectedText: {
    color: '#000', // Text color for selected option
  },
});

export default Goalfourthscreen;
