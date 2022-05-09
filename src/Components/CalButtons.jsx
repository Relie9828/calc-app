import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function CalButtons ({ operatorValue, clear, showNumber, buttonColor, fontColor, shadowColor, buttonRadius, fontSize }) {

    const [ buttonValue, setButtonValue ] = useState(['']);

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    const Btn = (props) => {
        return (
            <TouchableOpacity {...props}
            style={{ 
                backgroundColor: buttonColor,
                borderRadius: buttonRadius,
                justifyContent: 'center',
                alignItems: 'center',
                height: 85,
                width: 85,
                margin: 3,
            }}>
                <Text style={{ fontSize: fontSize, color: fontColor,}}>
                    {props.symbol}
                </Text>
            </TouchableOpacity>
        )
    };

    const Btn_Zero = (props) => {
        return (
            <TouchableOpacity {...props} style={{ 
                margin: 3,
                height: 85,
                width: 170,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: buttonRadius,
                backgroundColor: buttonColor,
            }}>
                <Text style={{ fontSize: fontSize, color: fontColor,}}>
                    {props.symbol}
                </Text>
            </TouchableOpacity>
        )
    };

    return (
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 70, }}>
            <View style={{ 
                justifyContent: 'center',
                flexDirection: 'row', 
                alignItems: 'center',
                width: deviceWidth, 
                flexWrap: 'wrap', 
            }}>
                <Btn symbol={'AC'} onPress={() => clear()} />
                <Btn symbol={'C'} onPress={() => alert('back one')} />
                <Btn symbol={'%'} onPress={() => operatorValue('%')} />
                <Btn symbol='÷' onPress={() => operatorValue('÷')}  />
                <Btn symbol={'7'} onPress={() => showNumber('7')} />
                <Btn symbol={'8'} onPress={() => showNumber('8')} />
                <Btn symbol={'9'} onPress={() => showNumber('9')} />
                <Btn symbol='&times;' onPress={() => operatorValue('*')} />
                <Btn symbol={'4'} onPress={() => showNumber('4')} />
                <Btn symbol={'5'} onPress={() => showNumber('5')} />
                <Btn symbol={'6'} onPress={() => showNumber('6')} />
                <Btn symbol={'-'} onPress={() => operatorValue('-')} />
                <Btn symbol={'1'} onPress={() => showNumber('1')} />
                <Btn symbol={'2'} onPress={() => showNumber('2')} />
                <Btn symbol={'3'} onPress={() => showNumber('3')} />
                <Btn symbol={'+'} onPress={() => operatorValue('+')} />
                <Btn_Zero symbol={'0'} onPress={() => showNumber('0')} />
                <Btn symbol={'.'} onPress={() => operatorValue('%')} />
                <Btn symbol={'='} onPress={() => alert('result')} />
            </View>
        </View>
    )
}