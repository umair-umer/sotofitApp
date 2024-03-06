import React from 'react';
import {View, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
export const Loader = () => {
  return (
    <View style={styles.Loaders}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};
const styles = StyleSheet.create({
  Loaders: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 999,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    height: height,
    width: width,
  },
});
