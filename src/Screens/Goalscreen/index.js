import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {calculateFontSize} from '../../Config/font';
import Images from '../../Config/im';

const fitnessGoals = [
  'Build Muscle Definition',
  'Improve Flexibility',
  'Lose Weight',
  'Gain Weight',
  'Increase Endurance',
  'Improve Diet',
];

const fitnessBarriers = [
  'Energy Level',
  'Not enough time',
  'Diet',
  'Motivation',
  'Disability/Injury',
  'Costs',
];

function Goalscreen({navigation}) {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedBarriers, setSelectedBarriers] = useState([]);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [importanceLevel, setImportanceLevel] = useState('');
  const [challenges, setChallenges] = useState('');

  const toggleGoalSelection = goal => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(item => item !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const toggleBarrierSelection = barrier => {
    setSelectedBarriers(currentBarriers =>
      currentBarriers.includes(barrier)
        ? currentBarriers.filter(item => item !== barrier)
        : [...currentBarriers, barrier],
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground source={Images.Goal} style={styles.background}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.forpad1}>
            <Text style={styles.heading}>
              <Text style={{fontStyle: 'italic'}}>SotoFits</Text>
              Personal Fitness Assessment
            </Text>
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>ADDITIONAL PROFILE INFO</Text>
            <View style={styles.forinputs}>
              <TextInput
                style={styles.input}
                placeholder="Age"
                placeholderTextColor="#fff"
                value={age}
                onChangeText={setAge}
              />
              <TextInput
                style={styles.input}
                placeholder="Gender"
                placeholderTextColor="#fff"
                value={gender}
                onChangeText={setGender}
              />
            </View>
            <View style={styles.forinputs}>
              <TextInput
                style={styles.input}
                placeholder="Height"
                placeholderTextColor="#fff"
                value={height}
                onChangeText={setHeight}
              />
              <TextInput
                style={styles.input}
                placeholder="Weight"
                placeholderTextColor="#fff"
                value={weight}
                onChangeText={setWeight}
              />
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>FITNESS GOALS</Text>
            <View style={styles.forinputsWrap}>
              {fitnessGoals.map((goal, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.input,
                    selectedGoals.includes(goal) ? styles.selectedInput : null,
                  ]}
                  onPress={() => toggleGoalSelection(goal)}>
                  <Text
                    style={[
                      {color: '#fff'},
                      selectedGoals.includes(goal) ? styles.selectedText : null,
                    ]}>
                    {goal}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.forpad2}>
            <TextInput
              style={styles.textarea}
              placeholder="Tell us more about your fitness goals....."
              placeholderTextColor="#fff"
              value={challenges}
              onChangeText={setChallenges}
            />
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              HOW IMPORTANT ARE YOUR GOALS ON A SCALE OF 1 TO 10?
            </Text>
            <Text style={styles.information}>
              (1-LEAST IMPORTANT, 10=MOST IMPORTANT)
            </Text>
            <View style={styles.forinputs}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
                value={importanceLevel}
                onChangeText={setImportanceLevel}
              />
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              WHAT ARE THE BIGGEST BARRIERS TO ACHIEVING YOUR FITNESS GOALS?
            </Text>
            <View style={styles.forinputsWrap}>
              {fitnessBarriers.map((barrier, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.input,
                    selectedBarriers.includes(barrier)
                      ? styles.selectedInput
                      : null,
                  ]}
                  onPress={() => toggleBarrierSelection(barrier)}>
                  <Text
                    style={[
                      {color: '#fff'},
                      selectedBarriers.includes(barrier)
                        ? styles.selectedText
                        : null,
                    ]}>
                    {barrier}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.forpad2}>
            <TextInput
              style={styles.textarea}
              placeholder="Tell us more about the challenges you need to overcome to reach your fitness goals..."
              placeholderTextColor="#fff"
              value={challenges}
              onChangeText={setChallenges}
            />
          </View>
          <View style={styles.forpad2}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'center'}}
              onPress={() =>
                navigation.navigate('Goalscrnsec', {
                  selectedGoals: selectedGoals,
                  selectedBarriers: selectedBarriers,
                  additionalInfo: {
                    age: age,
                    gender: gender,
                    height: height,
                    weight: weight,
                    importanceLevel: importanceLevel,
                    challenges: challenges,
                  },
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
    marginTop: 10,
  },
  input: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    paddingHorizontal: 8,
    textAlign: 'center',
    paddingVertical: 5,
    marginRight: width * 0.03,
    marginVertical: height * 0.008,
  },
  forinputs: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textarea: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    paddingHorizontal: 8,
    textAlign: 'center',
    marginVertical: 25,
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
    marginBottom: 20,
  },
  forinputsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: height * 0.05,
  },
  selectedInput: {
    backgroundColor: '#a2e7f2', // New selected background color
  },
  selectedText: {
    color: '#000', // New selected font color
  },
});

export default Goalscreen;
