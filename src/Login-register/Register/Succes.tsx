import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGoogle , } from '@fortawesome/free-brands-svg-icons';
import { faEye, faCheck } from '@fortawesome/free-solid-svg-icons';
import loginRegistercss from '../login-registercss'

const Succes = ({navigation}:any) => {
    const Done = () => {
        navigation.navigate('HomeScreen', { screen: 'Home2' })        // console.log('salam');

    }
  return (
    <View>
<View style={loginRegistercss.view4}> 
<View style={loginRegistercss.view5}>
<FontAwesomeIcon icon={faCheck} style={loginRegistercss.icon7} size={100} />
</View>
</View>
<View style={{marginTop:'10%', alignSelf:'center',flexDirection:'column', marginLeft:50}}>
    <Text style={{fontSize:30,}}>Account created!</Text>
    <Text style={{fontSize:15,marginTop:20}}>Your account has been creatd seccessfully!</Text>

</View>
<View>
<TouchableOpacity
                  style={[loginRegistercss.touc,{marginTop:'80%'}]}
                  onPress={() => Done()}>
                  <Text style={loginRegistercss.text}>
                  Done 
                  </Text>
              </TouchableOpacity>
</View>

    </View>
  )
}

export default Succes