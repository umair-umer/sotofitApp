import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Nav from './src/Config/navigation';
import { Introsliderscreen } from './src/Screens';
const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen
  }, []);

  return (
    <>
    <Nav/>
    </>
  );
};

export default App;
