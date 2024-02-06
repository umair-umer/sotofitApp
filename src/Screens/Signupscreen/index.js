import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Images from '../../Config/im';
import {calculateFontSize} from '../../Config/font';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function Signupscreen() {
  // State to track which tab is active ('login' or 'signup')
  const [activeTab, setActiveTab] = useState('login');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility(!confirmPasswordVisibility);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.Signup} style={styles.backgroundImage}>
        <View style={styles.logoView}>
          <Image
            source={Images.LOGO}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={() => setActiveTab('login')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'login' && styles.activeTabText,
              ]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('signup')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'signup' && styles.activeTabText,
              ]}>
              Create Profile
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'login' ? (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#fff"
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.inputMargin]}
                placeholder="Password"
                placeholderTextColor="#fff"
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.visibilityToggle}>
                <FontAwesome
                  name={passwordVisibility ? 'eye-slash' : 'eye'}
                  size={20}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.forgotCon}>
              <TouchableOpacity>
                <Text style={styles.forgottxt}>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loginWith}>
              <Text style={styles.forgottxt}>Login With</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image source={Images.FACEBOOK} resizeMode="cover" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image source={Images.GMAIL} resizeMode="cover" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image source={Images.TWITTER} resizeMode="cover" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.formContainer}>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#fff"
              />
              <TextInput
                style={[styles.input, styles.inputMargin]}
                placeholder="Email Address"
                placeholderTextColor="#fff"
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={!passwordVisibility} // Dynamically set based on the state
                />
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.visibilityToggle}>
                  <FontAwesome
                    name={passwordVisibility ? 'eye-slash' : 'eye'}
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={!confirmPasswordVisibility} // Dynamically set
                />
                <TouchableOpacity
                  onPress={toggleConfirmPasswordVisibility}
                  style={styles.visibilityToggle}>
                  <FontAwesome
                    name={confirmPasswordVisibility ? 'eye-slash' : 'eye'}
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.alreadysign}>
              <Text style={styles.alradytxt}>Already have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.alradysign}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logoView: {
    width: width * 0.5,
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.06,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tabText: {
    color: '#fff',
    fontSize: calculateFontSize(16),
  },
  activeTabText: {
    borderBottomWidth: 2,
    borderBottomColor: '#A2E7F2',
  },
  formContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: height * 0.02,
  },
  input: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#000',
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
    color: '#fff',
  },
  inputMargin: {
    marginVertical: height * 0.02,
  },
  loginBtn: {
    marginTop: height * 0.01,
    width: width * 0.2,
    height: height * 0.06,
    backgroundColor: '#A2E7F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#000',
    fontSize: calculateFontSize(16),
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  signupText: {
    color: '#fff',
    fontSize: calculateFontSize(16),
  },
  alreadysign: {
    flexDirection: 'row',
  },
  alradytxt: {
    color: '#fff',
    fontSize: calculateFontSize(14),
    fontWeight: '500',
  },
  alradysign: {
    color: '#A2E7F2',
    fontSize: calculateFontSize(14),
    fontWeight: '500',
  },
  forgottxt: {
    color: '#fff',
    fontSize: calculateFontSize(18),
    fontWeight: '300',
    marginVertical: height * 0.02,
    alignSelf: 'center',
  },

  loginWith: {
    marginVertical: height * 0.09,
  },
  signBtn: {
    marginTop: height * 0.01,
    width: width * 0.3,
    height: height * 0.06,
    backgroundColor: '#A2E7F2',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#000',
    borderRadius: 10,
    color: '#fff',
    marginVertical: height * 0.01,
  },
  visibilityToggle: {
    position: 'absolute',
    right: 10,
  },
});

export default Signupscreen;
