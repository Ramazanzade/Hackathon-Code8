import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { View , Text, Touchable, TouchableOpacity} from 'react-native'
import Tabbar from '../navigation/Tabbar/Tabbar'
import loginRegistercss from '../Login-register/login-registercss';


const Home = ({navigation}:any) => {
  const Loan =()=>{
    navigation.navigate('Home1')

  }
  return (
  <View>
<View style={{alignSelf:'center', marginTop:'10%'}}>
  <Text style={{fontSize:40}}>Loans</Text>
</View>
<View style={{marginLeft:20, marginTop:'10%'}}>
  <Text style={{fontSize:20, }}>Current loans</Text>
</View>

<View style={{backgroundColor:'#FFFFFF', paddingBottom:20, marginTop:'20%', margin:10, marginRight:30}}>
<View style={{flexDirection:'row',justifyContent:'space-between', marginHorizontal:'5%', marginTop:'5%'}}>
  <Text style={{fontSize:20, marginTop:'2%'}}>10000 m</Text>
  <TouchableOpacity style={{backgroundColor:'#ECF2FB', width:80,height:50 , borderRadius:10}}>
  <Text style={{fontSize:20, alignSelf:'center', marginTop:'10%', color:'blue'}}>Repay</Text>  
  </TouchableOpacity>
</View>
<View style={{height:2 , width:'100%', backgroundColor:'gray', marginTop:'5%'}}></View>

<View style={{flexDirection:'row', justifyContent:'space-around'}}>
<View>
  
<View style={{marginTop:'5%'}}>
  <Text style={{marginTop:'5%', fontSize:20}}> Rate</Text>
  <Text style={{marginTop:'5%', fontSize:15}}>12%</Text>
</View>
<View style={{marginTop:'5%'}}>
<Text style={{marginTop:'5%', fontSize:20}}> Monthly payment</Text>
  <Text style={{marginTop:'5%', fontSize:15}}>263.43 ₼</Text>
</View>
</View>
<View>
  
  <View  style={{marginTop:'5%'}}>
  <Text style={{marginTop:'5%', fontSize:20}}> Period</Text>
  <Text style={{marginTop:'5%', fontSize:15}}>24 months</Text>
  </View>
  <View>
  <Text style={{marginTop:'20%', fontSize:20}}> Total period</Text>
  <Text style={{marginTop:'5%', fontSize:15}}>12640.32 ₼</Text>
  </View>
  </View>
</View>
</View>


<TouchableOpacity
                  style={[loginRegistercss.touc,{marginTop:'40%'}]}
                  onPress={()=>Loan()}
                  >
                  <Text style={[loginRegistercss.text, {marginLeft:70}]}>
                  New Loan                  </Text>
              </TouchableOpacity>



  </View>
  )
}

export default Home
