import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import SetDarkMode from './src/Componnents/SetDarkMode';
import CalButtons from './src/Componnents/CalButtons';
import CalcOutput from './src/Componnents/CalcOutput';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

export default function App() {

  let fontSize = 35;
  let buttonRadius = 25;
  
  const [toggled, setToggled] = useState(false);
  const [lightMode, setLightMode] = useState(true);
  
  let fontColor = lightMode ? 'white' : 'black';
  let buttonColor = lightMode ? 'black' : 'white';
  let switchColor = lightMode ? 'black' : 'white';
  let shadowColor = lightMode ? 'black' : 'white';
  let resultFontColor = lightMode ? 'black' : 'white';
  let resultColor = lightMode ? 'whitesmoke' : 'white';
  let backgroundColor = lightMode ? 'white' : '#0C0407';
  let headerBackgroundColor = lightMode ? 'white' : 'black';
  
  const TRANSITIONS = 'fade';
  const STYLES = lightMode ? 'dark-content' : 'light-content';


  const setDarkMode = () => {
    setToggled(!toggled)
    setLightMode(!lightMode)
  };

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <StatusBar barStyle={STYLES} animated={true} showHideTransition={TRANSITIONS} />
      <View style={Platform.select({
        ios:{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: backgroundColor, }
      })}>
        <IconRegistry icons={EvaIconsPack} />
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <SetDarkMode setDarkMode={setDarkMode} headerBackgroundColor={headerBackgroundColor} shadowColor={shadowColor} switchColor={switchColor} toggled={toggled} />
          <CalcOutput shadowColor={shadowColor} resultColor={resultColor} resultFontColor={resultFontColor} />
          <CalButtons buttonColor={buttonColor} fontSize={fontSize} fontColor={fontColor} shadowColor={shadowColor} buttonRadius={buttonRadius} />
        </View>
      </View>
    </ApplicationProvider>
  );
}
