import { View, Image, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import loginRegistercss from '../Login-register/login-registercss'

const Home2 = ({navigation}:any) => {
    

    const login = () => {
    
        navigation.navigate('Home')

    }

  return (
    <View>
<View>
<Image source={require('../asset/img/0076.png')} style={{width:350, height:200, alignSelf:'center', marginTop:'5%', borderRadius:20, marginRight:20}} />
</View>

<View>
    <View style={{width:'80%', height:60 , flexDirection:'row', justifyContent:'space-around', marginTop:'10%', alignSelf:'center'}}>
    <View style={{flexDirection:'row'}}>
       <View>
       <Image source={require('../asset/img/0078.jpg')} style={{width:50, height:50,borderRadius:20, marginRight:20 }} />
       </View>
        <View>
        <Text style={{fontSize:20}}>Bravo</Text>
        <Text style={{marginLeft:0}}>Payment</Text>
        </View>
        </View>
        <View>
        <Text style={{fontSize:20}}>-13.00 ₼</Text>
        <Text style={{fontSize:12 , marginLeft:10}}>09:39 AM</Text>
        </View>
    </View>
    <View style={{width:'80%', height:60 , flexDirection:'row', justifyContent:'space-around', marginTop:'10%', alignSelf:'center'}}>
        <View style={{flexDirection:'row'}}>
       <View>
       <Image source={require('../asset/img/0079.jpg')} style={{width:50, height:50,borderRadius:20, marginRight:20 }} />
       </View>
        <View>
        <Text style={{fontSize:20}}>Leocard</Text>
        <Text style={{marginLeft:0}}>Transfer</Text>
        </View>
        </View>
        <View>
        <Text style={{fontSize:20}}>-20.00 ₼</Text>
        <Text style={{fontSize:12 , marginLeft:10}}>19:39 PM</Text>
        </View>
    </View>
    <View style={{width:'80%', height:60 , flexDirection:'row', justifyContent:'space-around', marginTop:'10%', alignSelf:'center'}}>
    <View style={{flexDirection:'row'}}>
       <View>
       <Image source={require('../asset/img/0079.jpg')} style={{width:50, height:50,borderRadius:20, marginRight:20 }} />
       </View>
        <View>
        <Text style={{fontSize:20}}>Leocard</Text>
        <Text style={{marginLeft:0}}>Transfer</Text>
        </View>
        </View>
        <View>
        <Text style={{fontSize:20}}>93.00 ₼</Text>
        <Text style={{fontSize:12 , marginLeft:10}}>09:36 AM</Text>
        </View>
    </View>
    <View style={{width:'80%', height:60 , flexDirection:'row', justifyContent:'space-around', marginTop:'10%', alignSelf:'center'}}>
    <View style={{flexDirection:'row'}}>
       <View>
       <Image source={require('../asset/img/0078.jpg')} style={{width:50, height:50,borderRadius:20, marginRight:20 }} />
       </View>
        <View>
        <Text style={{fontSize:20}}>Bravo</Text>
        <Text style={{marginLeft:0}}>Payment</Text>
        </View>
        </View>
        <View>
        <Text style={{fontSize:20}}>-73.00 ₼</Text>
        <Text style={{fontSize:12 , marginLeft:10}}>07:39 AM</Text>
        </View>
    </View>
</View>

<TouchableOpacity
                  style={[loginRegistercss.touc, {marginTop:'20%'}]}
                  onPress={() => login()}>
                  <Text style={loginRegistercss.text}>
                      Sing in 
                  </Text>
              </TouchableOpacity>
    </View>
  )
}

export default Home2