import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Navigations from './Routes/Navigations';
import * as eva from '@eva-design/eva';
import Home from './Routes/Pages/Home';

export default function App() {

  const [toggled, setToggled] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  
  const TRANSITIONS = 'fade';
  const STYLES = lightMode ? 'dark-content' : 'light-content';


  const setDarkMode = () => {
    setToggled(!toggled)
    setLightMode(!lightMode)
  };

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <StatusBar barStyle={STYLES} animated={true} showHideTransition={TRANSITIONS} />
        <Navigations STYLES={STYLES} TRANSITIONS={TRANSITIONS} 
        setDarkMode={setDarkMode} lightMode={lightMode} toggled={toggled} />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
