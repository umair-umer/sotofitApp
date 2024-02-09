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

function Goalsixthscreen({navigation}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

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
      <SafeAreaView>
    <ImageBackground source={Images.Goal} style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              PROVIDE ANY ADDITIONAL DETAILS ABOUT YOUR SELECTIONS ABOVE.
            </Text>
            <TextInput style={styles.textarea} />
          </View>
          <View style={styles.forpad2}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'center'}}
              onPress={() => navigation.navigate('home')}>
              <Text style={styles.button}>Finish</Text>
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
    paddingVertical: height * 0.05,
    marginVertical: height * 0.02,
    height: height * 0.09,
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
