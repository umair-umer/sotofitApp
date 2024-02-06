import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
Introsliderscreen,
Signupscreen 

} from '../Screens';

const Stack = createNativeStackNavigator();

function navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="getstarted" component={Introsliderscreen} />
      <Stack.Screen name="createprofilescreen" component={Signupscreen} />

      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default navigation
