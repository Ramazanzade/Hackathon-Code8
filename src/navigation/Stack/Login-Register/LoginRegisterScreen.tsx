import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../Login-register/Login/Login';
import Register from '../../../Login-register/Register/Register';
import Succes from '../../../Login-register/Register/Succes';


const Stack = createNativeStackNavigator();
const LoginRegisterScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Succes" component={Succes} />
        </Stack.Navigator>
    )
}
export default LoginRegisterScreen
