import React, { useState } from 'react';
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
const { width, height } = Dimensions.get('window');
import Images from '../../Config/im';
import { calculateFontSize } from '../../Config/font';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Loader } from '../../Components/loder';
import { baseUrl } from '../../Config/baseurl';
import axios from 'axios';
import qs from 'qs';
import { useDispatch} from 'react-redux';
import { setAssisment, setAuthToken } from '../../../store/action/actions';
function Signupscreen({navigation}) {
  const dispatch=useDispatch();
  const [loder, setlod] = useState(false)
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [confirm, setconfirm] = useState();
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

  const handlelogin = () => {
    console.log(email,password);
    setlod(true); // Start the loader
    axios.post(`${baseUrl}/auth/login`, qs.stringify({
      username: email,
      password: password,
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
     
      }
    })
      .then((response) => {
        console.log(response.data); 
        const token = response.data.token;
        // const assisment =response.data.user.assesment
        // Dispatch action to save token
        dispatch(setAuthToken(token));
        // dispatch(setAssisment(assisment));
        navigation.navigate("home")
      })
      .catch((error) => {
        console.error(error); 
      })
      .finally(() => {
        setlod(false); // Stop the loader
      });
  };
  const handleSignUp = () => {
    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }

    setlod(true); // Start loading

    const data = {
      firstName: name,
      email: email,
      password: password,
      // device_token should be retrieved from a push notification service
      device_token: 'g45yu56u65',
      role: 'user',
    };

    axios.post(`${baseUrl}/auth/signup`, qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // Include other headers as needed
      },
    })
      .then((response) => {
        console.log(response.data);
        const token = response.data.token;
        // Dispatch action to save token
        dispatch(setAuthToken(token));
        navigation.navigate("home")
      })
      .catch((error) => {
        // Handle error
        console.error(error.response ? error.response.data : error.message);
      })
      .finally(() => {
        setlod(false); // End loading
      });
  };



  return (
    <>
      {loder ? <Loader /> : <SafeAreaView style={styles.container}>
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
                onChangeText={(text) => setEmail(text)} // Updated to onChangeText
                value={email}


              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, styles.inputMargin]}
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  onChangeText={(text) => setpassword(text)} // Updated to onChangeText
                  value={password}

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

              <TouchableOpacity style={styles.loginBtn} onPress={handlelogin}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
              <View style={styles.forgotCon}>
                <TouchableOpacity>
                  <Text style={styles.forgottxt}>Forgot Password</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.loginWith}>
                <Text style={styles.forgottxt}>Login With</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                  onChangeText={(text) => setName(text)} // Updated to onChangeText
                  value={name}

                />
                <TextInput
                  style={[styles.input, styles.inputMargin]}
                  placeholder="Email Address"
                  placeholderTextColor="#fff"
                  onChangeText={(text) => setEmail(text)} // Updated to onChangeText
                  value={email}

                />
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    secureTextEntry={!passwordVisibility}
                    onChangeText={(text) => setpassword(text)} // Updated to onChangeText
                    value={password}

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
                    secureTextEntry={!confirmPasswordVisibility}
                    onChangeText={(text) => setconfirm(text)} // Updated to onChangeText
                    value={confirm}

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
              <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
                <Text style={styles.btnText}>Get sotofit</Text>
              </TouchableOpacity>

              <View style={styles.alreadysign}>
                <Text style={styles.alradytxt}>Already have an account? </Text>
                <TouchableOpacity>
                  <Text style={styles.alradysign}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ImageBackground>
      </SafeAreaView>}
    </>
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
    padding: 10,
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
