import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from "expo-splash-screen";
import * as React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { useCallback } from 'react/cjs/react.development';
import { useFonts } from 'expo-font';
import { useRoute } from './router';


export default function App() {

  const routing = useRoute(true);

  const [customFonts] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
 
   const onLayoutRootView = useCallback(async () => {
    if (customFonts) {
      await SplashScreen.hideAsync();
    }
  }, [customFonts]);

  if (!customFonts) {
    return null;
  }

  return (
    
    <>
      <StatusBar style="auto" />
      <NavigationContainer onLayout={onLayoutRootView}>{routing}</NavigationContainer>
    </>
   
  );
}

  