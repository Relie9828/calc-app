import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import SetDarkMode from '../../src/Components/SetDarkMode';
import CalButtons from '../../src/Components/CalButtons';
import CalcOutput from '../../src/Components/CalcOutput';

export default function Home ({ navigation, setDarkMode, lightMode, toggled }) {

    let fontSize = 35;
    let buttonRadius = 25;
    
    let fontColor = lightMode ? 'white' : 'black';
    let buttonColor = lightMode ? 'black' : 'white';
    let switchColor = lightMode ? 'black' : '#3366FF';
    let shadowColor = lightMode ? 'black' : 'white';
    let resultFontColor = lightMode ? 'black' : 'white';
    let resultColor = lightMode ? 'whitesmoke' : 'white';
    let backgroundColor = lightMode ? 'white' : '#0C0407';
    let headerBackgroundColor = lightMode ? 'white' : 'black';

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={Platform.select({
            ios:{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: backgroundColor, }
        })}>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <SetDarkMode setDarkMode={setDarkMode} headerBackgroundColor={headerBackgroundColor} shadowColor={shadowColor} switchColor={switchColor} toggled={toggled} />
                <CalcOutput shadowColor={shadowColor} resultColor={resultColor} resultFontColor={resultFontColor} />
                <CalButtons navigation={navigation} buttonColor={buttonColor} fontSize={fontSize} fontColor={fontColor} shadowColor={shadowColor} buttonRadius={buttonRadius} />
            </View>
        </View>
    )
}