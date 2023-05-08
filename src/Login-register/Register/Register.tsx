import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGoogle , faApple} from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import loginRegistercss from '../login-registercss'

const Register = ({navigation}:any) => {

    const [email, setemail] = useState<any>('')
    const [password, setpassword] = useState<any>('')
      const [emailerror, setemailerror] = useState(false)
    const [passworderror, setpassworderror] = useState(false);
    const [hideNumbers, setHideNumbers] = useState(false);
    const [hideText, setHideText] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); 
    const handleToggleHideNumbers = () => {
        setHideNumbers(!hideNumbers);
        setHideText(!hideText);
    };
    const handlePasswordChange = (text: string) => {
        setpassword(text);
        setpassworderror(text.trim() === '')
    };
    const handleEmailChange = (text: string) => {
        setemail(text);
        setemailerror(text.trim() === '' || !/\S+@\S+\.\S+/.test(text))
    };
  
    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }
    const errors = () => {
        if (emailerror == email || passworderror == password) {
            setpassworderror(true)
            setemailerror(true)
        } else {
        }
    }

    const login = () => {
        navigation.navigate('Login')
        console.log('salam');

    }
    const Register = () => {
        errors()
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        navigation.navigate('Succes')
        console.log('salam');

    }

    
  return (
    <View>
<View style={loginRegistercss.titleviwe}>
    <Text style={loginRegistercss.title}> Create Jazo pay</Text>
    <Text style={loginRegistercss.title1}>account,</Text>
</View>
<View style={[loginRegistercss.titleviwe1, {marginTop:'3%'}]}>
    <Text style={loginRegistercss.title2}>Sign up to get started!</Text>
</View>

<View>
              <TextInput
                  style={[loginRegistercss.input, { marginBottom: 20 , marginTop:'10%'}, emailerror && loginRegistercss.errorInput]}
                  onChangeText={handleEmailChange}
                  value={email}
                  placeholder="Enter your Email ID"
                  placeholderTextColor="gray"
              />
                <TextInput
                  style={[loginRegistercss.input, { marginBottom: 20 }, emailerror && loginRegistercss.errorInput]}
                  onChangeText={handlePasswordChange}
                  value={password}
                  placeholder="Fin"
                  placeholderTextColor="gray"
              />
                {/* <TextInput
                  style={[loginRegistercss.input, { marginBottom: 20 }, emailerror && loginRegistercss.errorInput]}
                  onChangeText={handleEmailChange}
                  value={email}
                  placeholder="Enter your Email ID"
                  placeholderTextColor="gray"
              /> */}
              <View>
                  <TouchableOpacity onPress={handleToggleHideNumbers} style={loginRegistercss.toggle}>
                      {hideNumbers
                          ? <FontAwesomeIcon icon={faEye} style={loginRegistercss.icon2} size={20} />
                          : <FontAwesomeIcon icon={faEyeSlash} style={loginRegistercss.icon2} size={20} />
                      }
                  </TouchableOpacity>
                  <TextInput
                      style={[loginRegistercss.input, passworderror && loginRegistercss.errorInput]}
                      onChangeText={handlePasswordChange}
                      value={hideText ? password.replace(/./g, '*') : password}
                      placeholder="Password"
                      placeholderTextColor="gray"
                  />
              </View>
              
              <View   style={loginRegistercss.toucview}>
              <View style={loginRegistercss.rememberMeView}>
    {/* <TouchableOpacity style={loginRegistercss.rememberMeCheckbox}>
      <View style={[loginRegistercss.checkbox, { backgroundColor: 'red' }]} />
    </TouchableOpacity>
    <Text style={loginRegistercss.rememberMeText}> Remember me </Text> */}
  </View>
  <TouchableOpacity style={loginRegistercss.touc1}>
    <Text style={loginRegistercss.text11}> Forgot password? </Text>
  </TouchableOpacity> 
</View>

              <TouchableOpacity
                  style={loginRegistercss.touc}
                  onPress={() => Register()}>
                  <Text style={loginRegistercss.text}>
                      Sing in 
                  </Text>
              </TouchableOpacity>
          </View>

          <View style={loginRegistercss.view12}>
            <View style={loginRegistercss.view1}></View>
            <Text style={loginRegistercss.text12}>Or</Text>
            <View style={loginRegistercss.view1}></View>
          </View>

          <View style={loginRegistercss.view3}>
            <View style={loginRegistercss.iconview}>
            <FontAwesomeIcon icon={faFacebook} style={loginRegistercss.icon3} size={40} />
            </View>
            <View style={loginRegistercss.iconview}>
            <FontAwesomeIcon icon={faGoogle} style={loginRegistercss.icon3} size={40} color='black'  />
            </View>
            <View style={loginRegistercss.iconview}>
            <FontAwesomeIcon icon={faApple} style={loginRegistercss.icon3} size={40} color='black' />
            </View>
          </View>

<View style={loginRegistercss.textvi}>
    <Text> Dont have an account?</Text>
    <TouchableOpacity onPress={()=> login()}>
        <Text style={{color:'blue',}}> Login</Text>
    </TouchableOpacity>
</View>
    </View>
  )
}

export default Register