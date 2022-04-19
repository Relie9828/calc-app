import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { Icon } from '@ui-kitten/components';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function SetDarkMode ({ navigation, headerBackgroundColor, shadowColor, switchColor, toggled, setDarkMode }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={{ 
            shadowOffset: { width: 0, height: 1.5, },
            backgroundColor: headerBackgroundColor,
            justifyContent: 'flex-end',
            shadowColor: shadowColor,
            paddingHorizontal: 20, 
            paddingVertical: 10,
            width: deviceWidth,
            shadowOpacity: .08,
            shadowRadius: 1,
            height: 100,
        }}>
            <Icon onPress={setDarkMode} name={toggled ? 'toggle-right-outline' : 'toggle-left-outline'} 
            fill={switchColor} width={35} height={35} />
        </View>
    )
}