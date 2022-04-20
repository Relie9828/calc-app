import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@ui-kitten/components';
import Settings from './Pages/Settings'
import Home from './Pages/Home';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const HomeStack = createStackNavigator();
export default function Navigations ({ navigation, setDarkMode, lightMode, toggled, STYLES, TRANSITIONS }) {
    return (
        <HomeStack.Navigator initialRouteName='home' >
            <HomeStack.Screen name='home' 
            options={{ headerShown: false, gestureEnabled: true }}
            children={props=> <Home {...props} STYLES={STYLES} TRANSITIONS={TRANSITIONS}
            toggled={toggled} setDarkMode={setDarkMode} lightMode={lightMode} />} />
            <HomeStack.Screen name='settings' 
            children={props=> <Settings {...props} STYLES={STYLES} TRANSITIONS={TRANSITIONS}
            toggled={toggled} setDarkMode={setDarkMode} lightMode={lightMode} /> } />
        </HomeStack.Navigator>
    )
}