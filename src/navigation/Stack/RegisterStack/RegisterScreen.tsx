import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../../../Onboarding/Onboarding';
import Register from '../../../Login-register/Register/Register';

const Stack = createNativeStackNavigator();
const OnboardingScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="Register" component={Register} />
   </Stack.Navigator>
  )
}
export default  OnboardingScreen
