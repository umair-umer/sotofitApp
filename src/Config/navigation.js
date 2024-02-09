import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  Home,
Introsliderscreen,
Signupscreen 

} from '../Screens';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();
function navigation() {
  const token = useSelector((state) => state.authToken);
  console.log(token,"navigation");
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      {token ? (
          // If token exists, go directly to the Home screen
         <>
          {/* <Stack.Screen name="getstarted" component={Introsliderscreen} /> */}
          <Stack.Screen name="home" component={Home} />
         </>
        ) : (
          // Otherwise, go to the intro slider screen
          <>
            <Stack.Screen name="createprofilescreen" component={Signupscreen} />
            {/* Include the Home screen here too so the navigation stack works correctly */}
        
          </>
        )}

      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default navigation
