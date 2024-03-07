import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Nav from './src/Config/navigation';
import {Introsliderscreen} from './src/Screens';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen
  }, []);

  return (
    <>
      <Nav />
      <FlashMessage animationDuration={1000} duration={2000} position="top" />
    </>
  );
};

export default App;
