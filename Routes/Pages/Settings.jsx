import { View, Text, Image, FlatList, TouchableOpacity, Vibration, Pressable, Dimensions, Alert } from 'react-native';
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Settings ({ navigation, setDarkMode, lightMode, toggled, STYLES, TRANSITIONS }) {

    let deviceHeight = Dimensions.get('window').height;
    let deviceWidth = Dimensions.get('window').width;

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', }}>
            <StatusBar barStyle={'dark-conntent'} animated={true} showHideTransition={'fade'} />
            <Text onPress={() => navigation.navigate('home')}>Settings</Text>
        </View>
    )
}