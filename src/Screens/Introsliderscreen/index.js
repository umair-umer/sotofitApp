import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const {width,height} = Dimensions.get("window")
import Images from '../../Config/im';
import { calculateFontSize } from '../../Config/font';


const Introsliderscreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
           <Text style={styles.headtext}>SotoFits</Text>
        </View>
     

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64ffda',
    alignItems:"center"

  },
  header:{
        width: width * 0.6,
        height : height * 0.08,
        backgroundColor:"#fff",
       marginTop:height* 0.2,
       alignItems:"center",
       justifyContent:"center"
  },

  
});

export default Introsliderscreen;
