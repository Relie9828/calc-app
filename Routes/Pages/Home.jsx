import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import SetDarkMode from '../../src/Components/SetDarkMode';
import CalButtons from '../../src/Components/CalButtons';
import CalcOutput from '../../src/Components/CalcOutput';

export default function Home ({ navigation, setDarkMode, lightMode, toggled }) {

    const [value, setValue] = useState(null)
    const [operation, setOperation] = useState('')
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')

    let fontSize = 27;
    let buttonRadius = 30;
    
    let fontColor = lightMode ? 'white' : 'black';
    let buttonColor = lightMode ? 'black' : 'white';
    let switchColor = lightMode ? 'black' : 'white';
    let shadowColor = lightMode ? 'black' : 'white';
    let resultFontColor = lightMode ? 'black' : 'white';
    let resultColor = lightMode ? 'whitesmoke' : 'white';
    let backgroundColor = lightMode ? 'white' : '#0C0407';
    let headerBackgroundColor = lightMode ? 'white' : 'black';

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    const showNumber = (buttonValue) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue)
        } 
    };

    const operatorValue = (buttonValue) => {
        setOperation(buttonValue)
    }
 
    const clear = () => {
        setOperation('')
        setFirstNumber('')
        setSecondNumber('')
    };

    const firstNumberDisplay = () => {
        if (value !== null) {
            return <Text style={value < 99999 && [{fontSize: 50, color: 'blue'}]}>{value?.toString()}</Text>; 
        }
        if (firstNumber && firstNumber.length < 6) {
          return <Text style={{ fontSize: 50, }} >{firstNumber}</Text>;
        }
        if (firstNumber === "") {
          return <Text style={{ fontSize: 50, }} >{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
          return (
            <Text style={[ { fontSize: 50 }]}>
              {firstNumber}
            </Text>
          );
        }
        if (firstNumber.length > 7) {
          return (
            <Text style={[ { fontSize: 50 }]}>
              {firstNumber}
            </Text>
          );
        }
      };

    return (
        <View style={Platform.select({
            ios:{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: backgroundColor, }
        })}>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <SetDarkMode setDarkMode={setDarkMode} headerBackgroundColor={headerBackgroundColor} shadowColor={shadowColor} switchColor={switchColor} toggled={toggled} />
                <CalcOutput firstNumberDisplay={firstNumberDisplay} firstNumber={firstNumber} secondNumber={secondNumber} operation={operation} value={value} shadowColor={shadowColor} resultColor={resultColor} resultFontColor={resultFontColor} />
                <CalButtons operatorValue={operatorValue} clear={clear} showNumber={showNumber} navigation={navigation} buttonColor={buttonColor} fontSize={fontSize} fontColor={fontColor} shadowColor={shadowColor} buttonRadius={buttonRadius} />
            </View>
        </View>
    )
}