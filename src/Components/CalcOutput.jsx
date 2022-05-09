import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function CalcOutput ({firstNumberDisplay, firstNumber, secondNumber, operation, value, resultFontColor, resultColor, shadowColor }) {

    let calculator_value = value

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ 
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                width: deviceWidth, 
                height: 180,
                padding: 24,
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 50, color: resultFontColor, }}>
                        {calculator_value}
                        {secondNumber}
                    </Text>
                        <Text style={{ fontSize: 35, }}>{operation}</Text>
                        {firstNumberDisplay()}
                </View>
            </View>
        </View>
    )
}