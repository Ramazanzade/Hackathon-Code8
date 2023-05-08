import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import loginRegistercss from '../Login-register/login-registercss'

const Home1 = ({navigation}:any) => {
    const [amount, setamount] = useState<any>('')

    return (
        <View>
            <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                <Text style={{ fontSize: 30 }}>Open New Loan</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '10%', marginLeft: 30 }}>
                <TouchableOpacity style={{ backgroundColor: '#3D7DD9', width: 70, height: 40, borderRadius: 10 }}>
                    <Text style={{ alignSelf: 'center', marginTop: '10%', color: "#FFFFFF" }}> AZE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 70, height: 40, borderRadius: 10, marginLeft: 30 }}>
                    <Text style={{ alignSelf: 'center', marginTop: '10%' }}> ENG</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 2, width: '100%', backgroundColor: 'gray', marginTop: '5%' }}></View>

            <View>
                <Text style={{ fontSize: 20, marginTop: '5%' }}>Choose deposit period</Text>
                <View style={{ flexDirection: 'row', marginTop: '10%', marginLeft: 30 }}>
                    <TouchableOpacity style={{ backgroundColor: '#3D7DD9', width: 70, height: 40, borderRadius: 10 }}>
                        <Text style={{ alignSelf: 'center', marginTop: '10%', color: "#FFFFFF" }}> 3 mon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 70, height: 40, borderRadius: 10, marginLeft: 30 }}>
                        <Text style={{ alignSelf: 'center', marginTop: '10%' }}> 6 mon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 70, height: 40, borderRadius: 10, marginLeft: 30 }}>
                        <Text style={{ alignSelf: 'center', marginTop: '10%' }}> 12 mon</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View>
                <View style={{ flexDirection: 'row', marginTop: '10%', marginLeft: 30 }}>
                    <TouchableOpacity style={{ width: 70, height: 40, borderRadius: 10, marginLeft: 30 }}>
                        <Text style={{ alignSelf: 'center', marginTop: '10%' }}> 18 mon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 70, height: 40, borderRadius: 10, marginLeft: 30 }}>
                        <Text style={{ alignSelf: 'center', marginTop: '10%' }}> 24 mon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 70, height: 40, borderRadius: 10, marginLeft: 30 }}>
                        <Text style={{ alignSelf: 'center', marginTop: '10%' }}> 36 mon</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ height: 2, width: '100%', backgroundColor: 'gray', marginTop: '5%' }}></View>
            <View>
                <Text style={{ fontSize: 20, margin: 10 }}>Amount</Text>
                <TextInput
                    style={[loginRegistercss.input, { marginBottom: 20 },]}
                    onChangeText={setamount}
                    value={amount}
                    placeholder="263.34 ₼"
                    placeholderTextColor="gray"
                />
            </View>
            <View>
                <Text style={{ fontSize: 20, margin: 10 }}>Calculated monthly repayment</Text>
                <TextInput
                    style={[loginRegistercss.input, { marginBottom: 20 },]}
                    onChangeText={setamount}
                    value={amount}
                    placeholder="12640.32 ₼"
                    placeholderTextColor="gray"
                />
            </View>

            <TouchableOpacity
                  style={loginRegistercss.touc}
                  onPress={()=>navigation.navigate('HomeSucces')                }
                 >
                  <Text style={[loginRegistercss.text, {marginLeft:30}]}>
                  Open New Loan                  </Text>
              </TouchableOpacity>
        </View>
    )
}

export default Home1