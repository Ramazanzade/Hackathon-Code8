import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../../Home/Home';
import Tabbar from '../../Tabbar/Tabbar';
import Home1 from '../../../Home/Home1';
import HomeSucces from '../../../Home/HomeSucces';
import Home2 from '../../../Home/Home2';


const Stack = createNativeStackNavigator();
const HomeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
                        <Stack.Screen name="Home2" component={Home2} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Home1" component={Home1} />
            <Stack.Screen name="HomeSucces" component={HomeSucces} />
        </Stack.Navigator>
    )
}
export default HomeScreen
