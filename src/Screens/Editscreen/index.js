import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Images from '../../Config/im';
import {calculateFontSize} from '../../Config/font';
const {width, height} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {baseUrl} from '../../Config/baseurl';
import {launchImageLibrary} from 'react-native-image-picker';
import {Loader} from '../../Components/loder';
import Modal from 'react-native-modal';
const EditScreen = ({navigation}) => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phone, setphone] = useState();
  const[loader,setloader]=useState();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(true);
  };
  const [profileData, setProfileData] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const token = useSelector(state => state.authToken);

  const updateProfile = async () => {
    const formData = new FormData();
    formData.append('firstName', firstname);
    formData.append('lastName', lastname);
    formData.append('phone', phone);

    // Include the profile image only if one has been selected
    if (profileImage.uri) {
      formData.append('picture', {
        uri: profileImage.uri,
        type: profileImage.type,
        name: profileImage.name,
      });
    }
    setloader(true)
    const config = {
      method: 'put',
      url: `${baseUrl}/auth/update-profile`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };

    try {
      const response = await axios(config);
      console.log(response.data, 'editprofiledone');
      setProfileData(response.data.data[0])
      setModalVisible(false);
      navigation.navigate('home')
      setloader(false)
     
    } catch (error) {
      console.error(error);
      // Handle the error, possibly show an error message to the user
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'get',
        url: `${baseUrl}/auth/profile`,
        headers: {
          Authorization: `Bearer ${token}`, // Use token from Redux store
        },
      };

      try {
        const response = await axios.request(config);
        setProfileData(response.data.data[0]);
        console.log('Profile data:edit screen', response.data.data);
      } catch (err) {
        console.log('Error fetching profile data:', err);
      }
    };

    fetchData();
  }, [token]);
  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        setProfileImage({
          uri: asset.uri,
          name: response.assets.fileName || 'profile.jpg', // Fallback name if fileName is not available
          type: response.assets.type || 'image/jpeg', // Fallback type if not available
        });
      }
    });
    console.log(profileImage);
  };

  return (
    <>
    {loader ? <Loader/>: <LinearGradient
      colors={['#F855D2', '#E62FFA91', '#FC093ABA']}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.profileSection}>
          <Image
            source={profileData?.picture || Images.Profileimage}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{profileData?.firstName}</Text>
          <TouchableOpacity
            style={styles.changephoto}
            onPress={handleChoosePhoto}>
            <Text style={styles.photo}>Change Photo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.maininfo}>
          <View style={styles.maininfoinner}>
            <Text style={styles.infohead}>First Name</Text>
            <Text style={styles.info}>{profileData?.firstName}</Text>
          </View>
          <View style={styles.maininfoinner}>
            <Text style={styles.infohead}>Last Name</Text>
            <Text style={styles.info}>
              {profileData?.lastName ? profileData.lastName : '------'}
            </Text>
          </View>
          <View style={styles.maininfoinner}>
            <Text style={styles.infohead}>Phone Number</Text>
            <Text style={styles.info}>
              {profileData?.phone ? profileData?.phone : '------'}
            </Text>
          </View>
          <View style={styles.maininfoinner}>
            <Text style={styles.infohead}>Email</Text>
            <Text style={styles.info}>{profileData?.email}</Text>
          </View>
        </View>
        <View style={styles.buttonmain}>
          <TouchableOpacity
            style={styles.mainbuttoninner}
            onPress={
            toggleModal
            }>
            <Text style={styles.buttontext}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerselected}
            onPress={() => navigation.goBack()}>
            <View style={styles.footerselectedinner}>
              <Ionicons name="chevron-back-outline" size={22} color="white" />
              <Text style={[styles.footerText, styles.footerTextSelected]}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
   

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal} // Android back press
        onSwipeComplete={toggleModal} // Swipe to dismiss
        swipeDirection="down" // Can be 'up', 'left', 'right', 'down'
        style={styles.bottomModal}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#fff"
            onChangeText={text => setfirstname(text)} // Updated to onChangeText
            value={firstname}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Namme"
            placeholderTextColor="#fff"
            onChangeText={text => setlastname(text)} // Updated to onChangeText
            value={lastname}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your number"
            placeholderTextColor="#fff"
            onChangeText={text => setphone(text)} // Updated to onChangeText
            value={phone}
          />
          <TouchableOpacity
            style={styles.mainbuttoninner}
            onPress={
              updateProfile
              // () => navigation.navigate('Reseverscreen')
            }>
            <Text style={styles.buttontext}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </LinearGradient>}
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: height * 0.08,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: height * 0.006,
    color: '#fff',
    textTransform: 'capitalize',
  },
  photo: {
    fontSize: 14,
    color: 'lightgrey',
  },
  maininfo: {
    backgroundColor: '#260222',
    padding: 25,
    marginHorizontal: width * 0.02,
    borderRadius: 5,
  },
  maininfoinner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: height * 0.04,
  },
  infohead: {
    color: '#939293',
    fontSize: 18,
  },
  info: {
    color: '#939293',
    fontSize: 16,
    textTransform: 'capitalize',
  },
  buttonmain: {
    alignItems: 'center',
  },
  mainbuttoninner: {
    backgroundColor: '#a2e7f2',
    paddingVertical: height * 0.02,
    borderRadius: 10,
    width: width * 0.5,
    marginTop: height * 0.09,
  },
  buttontext: {
    fontSize: calculateFontSize(20),
    textAlign: 'center',
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: height * 0.08,
    paddingBottom: height * 0.04,
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
  },
  footerselectedinner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: height * 0.02,
    width: width * 0.3,
  },
  footerselected: {
    borderBottomWidth: 4,
    borderBottomColor: '#A2E7F2',
  },
  footerTextSelected: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: width * 0.05,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: height * 0.6,
    borderTopEndRadius:15,
    borderTopStartRadius:15
  },
  input: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#000',
    paddingHorizontal: width * 0.04,
    borderRadius: 10,
    color: '#fff',
    marginVertical:height*0.02
  },
});

export default EditScreen;
