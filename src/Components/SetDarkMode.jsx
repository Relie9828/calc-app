import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
// import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { Icon } from '@ui-kitten/components';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function SetDarkMode ({ 
    navigation, 
    headerBackgroundColor, 
    shadowColor, 
    switchColor, 
    toggled, 
    setDarkMode,
}) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={{ 
            shadowOffset: { width: 0, height: 1.5, },
            backgroundColor: headerBackgroundColor,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            shadowColor: shadowColor,
            paddingHorizontal: 20, 
            flexDirection: 'row',
            paddingVertical: 10,
            width: deviceWidth,
            shadowOpacity: .08,
            shadowRadius: 1,
            height: 100,
        }}>
            <TouchableOpacity style={{ width: 35 }}>
                <Icon onPress={setDarkMode} name={toggled ? 'toggle-right-outline' : 'toggle-left-outline'} 
                fill={switchColor} width={35} height={35} />
            </TouchableOpacity>

            <Icon name={toggled ? 'moon' : 'sun-outline'} 
            fill={switchColor} width={toggled ? 25 : 35} height={35} />
        </View>
    )
}