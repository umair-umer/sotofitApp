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

function Goalthirdscreen({navigation, route}) {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [exercise, setExercise] = useState('');
  const [otherExercise, setOtherExercise] = useState('');
  const [timesExercises, setTimesExercises] = useState('');
  const [isTimeIndex, setisTimeIndex] = useState(null);
  const [outDoors, setoutDoors] = useState('');
  const userData = route.params?.data;

  const toggleExerciseSelection = exercise => {
    setSelectedExercises(prevSelectedExercises =>
      prevSelectedExercises.includes(exercise)
        ? prevSelectedExercises.filter(e => e !== exercise)
        : [...prevSelectedExercises, exercise],
    );
  };

  const exerciseOptions = [
    'Weight Lifting',
    'Cardio',
    'Stretching',
    'Yoga',
    'High Intensity Interval Training (HIIT)',
    'Playing Sports',
    'Other',
  ];

  const timesExercise = [
    'Less than 30 minutes',
    '30 to 60 minutes',
    '60 to 90 minutes',
    'Over 90 minutes',
  ];

  const handleContinue = () => {
    const data = {
      ...userData,
      exercise: exercise,
      selectedExercises: selectedExercises,
      otherExercise: otherExercise,
      timesExercises: timesExercises,
      outDoors: outDoors,
    };
    navigation.navigate('Goalsrnfrth', {data: data});
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={Images.Goal}
        resizeMode="cover"
        style={styles.background}>
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
              HOW MANY DAYS PER WEEK DO YOU TYPICALLY EXERCISE?
            </Text>
            <TextInput
              style={styles.exerciseInput}
              placeholder="1-10"
              placeholderTextColor="gray"
              value={exercise}
              onChangeText={setExercise}
            />
            <Text style={styles.information}>
              WHAT KIND OF EXERCISES DO YOU TYPICALLY PERFORM?
            </Text>
            <View style={styles.forinputs}>
              {exerciseOptions.map((exercise, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.input,
                    selectedExercises.includes(exercise)
                      ? styles.selectedInput
                      : {},
                    {margin: width * 0.008},
                  ]}
                  onPress={() => toggleExerciseSelection(exercise)}>
                  <Text
                    style={[
                      {color: '#fff'},
                      selectedExercises.includes(exercise)
                        ? styles.selectedText
                        : {},
                    ]}>
                    {exercise}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.forpad2}>
            <TextInput
              style={styles.textarea}
              placeholder="What other exercise do you typically perform?"
              placeholderTextColor="gray"
              value={otherExercise}
              numberOfLines={2}
              onChangeText={setOtherExercise}
            />
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              ABOUT HOW MUCH TIME DO YOU SPEND EACH TIME YOU EXERCISE?
            </Text>
            <View style={{marginVertical: 10}}>
              {timesExercise.map((v, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.timeExerciseBtn,
                      {
                        backgroundColor:
                          isTimeIndex == i ? '#a2e7f2' : '#2f2b2b',
                      },
                    ]}
                    onPress={() => {
                      setisTimeIndex(i);
                      setTimesExercises(v);
                    }}>
                    <Text style={{color: isTimeIndex == i ? 'black' : 'white'}}>
                      {v}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              HOW MANY DAYS PER WEEK DO YOU RUN/JOG (EITHER TREADMILL OR
              OUTDOORS)?
            </Text>
            <View style={styles.forinputs}>
              <TextInput
                style={styles.exerciseInput}
                placeholder="1-10"
                placeholderTextColor="gray"
                onChangeText={setoutDoors}
                value={outDoors}
              />
            </View>
          </View>
          <View style={styles.forpad2}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'center'}}
              onPress={handleContinue}>
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
    fontSize: calculateFontSize(14),
    marginTop: 10,
  },
  input: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    paddingHorizontal: width * 0.03,
    textAlign: 'center',
    paddingVertical: height * 0.05,
    marginBottom: height * 0.04,
    marginRight: 10,
    flex: 1,
    minWidth: '48%',
  },
  selectedInput: {
    backgroundColor: '#a2e7f2', // Highlight selected options
  },
  selectedText: {
    color: '#000', // Text color for selected options
  },
  forinputs: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow options to wrap to the next line
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
    marginRight: 10,
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
  timeExerciseBtn: {
    backgroundColor: '#2f2b2b',
    marginVertical: 2,
    padding: 6,
    borderRadius: 10,
    paddingLeft: 13,
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
  infodata: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    paddingTop: 8,
  },
  exerciseInput: {
    width: '16%',
    backgroundColor: '#2f2b2b',
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    height: 30,
    padding: 0,
    marginVertical: 10,
  },
});

export default Goalthirdscreen;
