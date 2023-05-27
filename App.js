import { StatusBar } from 'expo-status-bar';
import { } from 'react-native';
import * as React from 'react';

// import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";

import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

 
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />

     {/* <LoginScreen/> */}
     <RegistrationScreen/>
   </>
  );
}

  