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

function Goalsecscreen({navigation, route}) {
  const [selectedReadiness, setSelectedReadiness] = useState('');
  const [confidenceLevel, setConfidenceLevel] = useState('');
  const userData = route.params?.data;
  const [motivationScores, setMotivationScores] = useState({
    'Seeing Results': '',
    'Being Held Accountable': '',
    'Praises/Rewards': '',
    'Having Fun': '',
    'Feeling better about yourself': '',
    'Other (explain below)': '',
  });
  const [otherMotivation, setOtherMotivation] = useState('');
  const readinessOptions = [
    "I'm ready now",
    'I want to change soon',
    'I already start making changes',
    "I want to change, but don't think I can",
  ];
  const handleMotivationScoreChange = (key, value) => {
    setMotivationScores(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleContinue = () => {
    const data = {
      ...userData,
      readiness: selectedReadiness,
      confidenceLevel: confidenceLevel,
      motivationScores: motivationScores,
      otherMotivation: otherMotivation,
    };
    navigation.navigate('Goalsrnhrd', {data: data});
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
              HOW READY ARE TO MAKE LIFESTYLE CHANGES TO OBTAIN YOUR FITNESS
              GOALS
            </Text>
            <View style={styles.inlineOptions}>
              {readinessOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.input,
                    selectedReadiness === option ? styles.selectedInput : {},
                    {margin: width * 0.008},
                  ]}
                  onPress={() => setSelectedReadiness(option)}>
                  <Text
                    style={
                      selectedReadiness === option
                        ? styles.selectedText
                        : {color: '#fff'}
                    }>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              HOW CONFIDENT ARE YOU THAT YOU WILL ACHIEVE YOUR FITNESS GOALS ON
              A SCALE OF 1 TO 10?
            </Text>
            <Text style={styles.information}>
              (1-LEAST IMPORTANT, 10=MOST IMPORTANT)
            </Text>
            <View style={styles.forinputs}>
              <TextInput
                style={styles.input}
                placeholder="1-10"
                value={confidenceLevel}
                placeholderTextColor="gray"
                onChangeText={value => setConfidenceLevel(value)}
              />
            </View>
          </View>
          <View style={styles.forpad2}>
            <Text style={styles.information}>
              ON A SCALE OF 1 TO 10, HOW WELL DOES THE EACH OF THE FOLLOWING
              MOTIVATE YOU?
            </Text>
            <View style={{flexDirection: 'column', marginTop: 10}}>
              {Object.keys(motivationScores).map((motivation, index) => {
                // console.log(
                //   'motivation=====?>>>>',
                //   motivationScores['Being Held Accountable'],
                // );
                return (
                  <View
                    key={index}
                    style={{flexDirection: 'row', marginTop: 10}}>
                    <TextInput
                      style={styles.input}
                      placeholder="1-10"
                      placeholderTextColor="gray"
                      onChangeText={value =>
                        handleMotivationScoreChange(motivation, value)
                      }
                    />
                    <Text style={styles.infodata}>{motivation}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.forpad2}>
            <TextInput
              style={styles.textarea}
              placeholder="What else motivates you?"
              placeholderTextColor="gray"
              numberOfLines={3}
              value={otherMotivation}
              onChangeText={setOtherMotivation}
            />
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
    fontSize: calculateFontSize(16),
    marginTop: 10,
  },
  input: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    paddingHorizontal: width * 0.02,
    padding: 5,
    textAlign: 'center',
  },
  inlineOptions: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.02,
    marginTop: height * 0.03,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  selectedInput: {
    backgroundColor: '#a2e7f2',
  },
  selectedText: {
    color: '#000',
  },
  textarea: {
    backgroundColor: '#2f2b2b',
    borderRadius: 10,
    fontSize: calculateFontSize(15),
    color: '#fff',
    paddingLeft: 16,
    marginVertical: 25,
    textAlignVertical: 'top',
    textAlign: 'left',
    // height: height * 0.09,
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
    paddingTop: height * 0.008,
    paddingHorizontal: width * 0.05,
  },
});

export default Goalsecscreen;
