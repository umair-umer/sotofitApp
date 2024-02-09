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

function Goalthirdscreen({navigation,route}) {
  const { selectedGoals, selectedBarriers, additionalInfo, motivationData } = route.params;

  // Now you can access the params data and use it in your component
  console.log('Selected Goals:', selectedGoals);
  console.log('Selected Barriers:', selectedBarriers);
  console.log('Additional Info:', additionalInfo);
  console.log('Motivation Data:', motivationData);

  const [selectedExercises, setSelectedExercises] = useState([]);

  const toggleExerciseSelection = (exercise) => {
    setSelectedExercises((prevSelectedExercises) =>
      prevSelectedExercises.includes(exercise)
        ? prevSelectedExercises.filter((e) => e !== exercise)
        : [...prevSelectedExercises, exercise]
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
  return (
    <SafeAreaView>
    <ImageBackground 
      source={Images.Goal}
      resizeMode='cover'
       style={styles.background}>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.forpad1}>
          <Text style={styles.heading}>
            <Text style={{fontStyle: 'italic'}}>SotoFits</Text> Personal Fitness
            Assessment
          </Text>
        </View>
        <View style={styles.forpad2}>
          <Text style={styles.information}>
            WHAT KIND OF EXERCISE DO YOU TYPICALLY PERFORM?
          </Text>
          <View style={styles.forinputs}>
          {exerciseOptions.map((exercise, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.input,
                selectedExercises.includes(exercise) ? styles.selectedInput : {},
                { margin: width * 0.008 },
              ]}
              onPress={() => toggleExerciseSelection(exercise)}
            >
              <Text
                style={[
                  { color: '#fff' },
                  selectedExercises.includes(exercise) ? styles.selectedText : {},
                ]}
              >
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
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.forpad2}>
          <Text style={styles.information}>
            HOW CONFIDENT ARE YOU THAT YOU WILL ACHIEVE YOUR FITNESS GOALS ON A
            SCALE OF 1 TO 10?
          </Text>
          <Text style={styles.information}>
            (1-LEAST IMPORTANT, 10=MOST IMPORTANT)
          </Text>
          <View style={styles.forinputs}>
            <TextInput
              style={styles.input}
              placeholder="1-10"
              placeholderTextColor="#fff"
            />
          </View>
        </View>
        <View style={styles.forpad2}>
          <Text style={styles.information}>
            ON A SCALE OF 1 TO 10, HOW WELL DOES THE EACH OF THE FOLLOWING
            MOTIVATE YOU?
          </Text>
          <View style={{flexDirection: 'column', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
              />
              <Text style={styles.infodata}>Seeing Results</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
              />
              <Text style={styles.infodata}>Being Held Accountable</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
              />
              <Text style={styles.infodata}>Praises/Rewards</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
              />
              <Text style={styles.infodata}>Having Fun</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
              />
              <Text style={styles.infodata}>Feeling better about yourself</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
              />
              <Text style={styles.infodata}>Seeing Results</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
              />
              <Text style={styles.infodata}>Seeing Results</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                placeholderTextColor="#fff"
              />
              <Text style={styles.infodata}>Other (explain below)</Text>
            </View>
          </View>
        </View>
        <View style={styles.forpad2}>
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'center'}}
            onPress={() => navigation.navigate('Goalsrnfrth')}>
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
    paddingHorizontal: width * 0.03,
    textAlign: 'center',
    paddingVertical: height * 0.05,
    marginBottom: height * 0.04, // Added spacing between buttons
    marginRight: 10, // Ensure spacing for buttons in the same row
    flex: 1, // Added for flexible button widths
    minWidth: '48%', // Ensure buttons can fit side by side
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
    paddingHorizontal: 8,
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
  infodata: {
    color: '#fff',
    fontSize: calculateFontSize(15),
    paddingTop: 8,
    display: 'block',
  },
});

export default Goalthirdscreen;