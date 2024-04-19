import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Home,
  Introsliderscreen,
  Signupscreen,
  Goalscreen,
  Goalsecscreen,
  Goalthirdscreen,
  Goalfourthscreen,
  Goalfifthscreen,
  Goalsixthscreen,
  ProfileScreen,
  EditScreen,
  Purchasescreen,
  PaymentOptionsScreen,
  Checkout,
  Exercisescreen,
  Grocerylistscreen,
  Calorietrackerscreen,
  Foodsearchscreen,
  Foodselectscreen,
  Breakfastscreen,
  MeasPlan,
} from '../Screens';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
function navigation() {
  const token = useSelector(state => state.authToken);
  console.log(token, 'navigation');
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="getstarted" component={Introsliderscreen} />
            {/* <Stack.Screen name="introslider" component={Introsliderscreen} /> */}
            <Stack.Screen name="Goalscrn" component={Goalscreen} />
            <Stack.Screen name="Goalscrnsec" component={Goalsecscreen} />
            <Stack.Screen name="Goalsrnhrd" component={Goalthirdscreen} />
            <Stack.Screen name="Goalsrnfrth" component={Goalfourthscreen} />
            <Stack.Screen name="Goalsrnfive" component={Goalfifthscreen} />
            <Stack.Screen name="Goalsrnsix" component={Goalsixthscreen} />
            <Stack.Screen name="profilescreen" component={ProfileScreen} />
            <Stack.Screen name="Editproscreen" component={EditScreen} />
            <Stack.Screen name="Reseverscreen" component={Purchasescreen} />
            <Stack.Screen
              name="pucahsescreen"
              component={PaymentOptionsScreen}
            />
            <Stack.Screen name="checkoutscreen" component={Checkout} />
            <Stack.Screen name="exercisescreen" component={Exercisescreen} />
            <Stack.Screen name="groceryscreen" component={Grocerylistscreen} />
            <Stack.Screen name="calories" component={Calorietrackerscreen} />
            <Stack.Screen name="food" component={Foodsearchscreen} />
            <Stack.Screen name="selectfood" component={Foodselectscreen} />
            <Stack.Screen name="breakfast" component={Breakfastscreen} />
            <Stack.Screen name="mealplan" component={MeasPlan} />
          </>
        ) : (
          <>
            <Stack.Screen name="createprofilescreen" component={Signupscreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default navigation;
