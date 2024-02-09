import React from 'react'
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native'
export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff"
  }
})