import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splas from '../../../Splas/Splas';
import Splas2 from '../../../Splas/Splas2';

const Stack = createNativeStackNavigator();
const SplashScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
             <Stack.Screen name="Splas" component={Splas} />
             <Stack.Screen name="Splas2" component={Splas2} />
   </Stack.Navigator>
  )
}

export default SplashScreen