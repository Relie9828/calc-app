import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function CalButtons ({ navigation, buttonColor, fontColor, shadowColor, buttonRadius, fontSize }) {

    const [ buttonValue, setButtonValue ] = useState(['']);

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    const Btn = ({ symbol, screen }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(screen)} 
            style={{ 
                backgroundColor: buttonColor,
                borderRadius: buttonRadius,
                justifyContent: 'center',
                alignItems: 'center',
                height: 90,
                width: 90,
                margin: 3,
            }}>
                <Text style={{ fontSize: fontSize, color: fontColor,}}>
                    {symbol}
                </Text>
            </TouchableOpacity>
        )
    };

    const Btn_Zero = ({symbol}) => {
        return (
            <TouchableOpacity style={{ 
                margin: 3,
                height: 90,
                width: 180,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: buttonRadius,
                backgroundColor: buttonColor,
            }}>
                <Text style={{ fontSize: fontSize, color: fontColor,}}>
                    {symbol}
                </Text>
            </TouchableOpacity>
        )
    };

    return (
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 35, }}>
            <View style={{ 
                justifyContent: 'center',
                flexDirection: 'row', 
                alignItems: 'center',
                width: deviceWidth, 
                flexWrap: 'wrap', 
            }}>
                <Btn screen='settings' symbol={'AC'} />
                <Btn symbol={'C'} />
                <Btn symbol={'%'} />
                <Btn symbol='&#247;' />
                <Btn symbol={'7'} />
                <Btn symbol={'8'} />
                <Btn symbol={'9'} />
                <Btn symbol='&times;' />
                <Btn symbol={'4'} />
                <Btn symbol={'5'} />
                <Btn symbol={'6'} />
                <Btn symbol={'-'} />
                <Btn symbol={'1'} />
                <Btn symbol={'2'} />
                <Btn symbol={'3'} />
                <Btn symbol={'+'} />
                <Btn_Zero symbol={'0'} />
                <Btn symbol={'.'} />
                <Btn symbol={'='} />
            </View>
        </View>
    )
}