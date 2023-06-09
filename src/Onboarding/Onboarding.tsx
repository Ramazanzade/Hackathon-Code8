import { View, Text, Dimensions, Image, SafeAreaView, StatusBar, FlatList, TouchableOpacity, } from 'react-native'
import React, { useState, useRef } from 'react'
import stayle from './Onboardingcss';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');
const colors = { primary: '#282534', white: '#2445CD' };
const imges = [
    {
        id: 1,
        imge: require('../asset/img/0073.jpg'),
        title: 'Create profiles for diffrent members & get personalised recommendations',
    },
    {
        id: 2,
        imge: require('../asset/img/0074.jpg'),
        title: 'Plans according to your needs at affordable prices',
    },
    {
        id: 3,
        imge: require('../asset/img/0075.jpg'),
        title: 'Let’s Get Started !!!',
    }

]


const Slide = ({ item }: any) => {
    return (
        <View style={{ alignItems: 'center', position: 'relative' }}>
            <Image
                source={item?.imge}
                style={{ height: '100%', width, marginTop: -10, resizeMode: 'contain' }}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,10000)']}
                style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 150 }}
            />
            {/* <View style={{ position: 'absolute', zIndex: 105, marginTop:-150 }} >
                <Image
                source={require('../asset/imge/2.png')}
                style={{  width:700, height:900 ,resizeMode: 'contain',}}
                />
            </View> */}
            <View style={{ position: 'absolute', zIndex: 100, marginTop:'130%' }}>
                <Text style={stayle.title}>{item?.title}</Text>
            </View>
        </View>
    );
};




const Onboarding = ({ navigation }: any) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef<any>();
    const updateCurrentSlideIndex = ({ e }: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex !== imges.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };
    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        // marginTop: 20,
                        zIndex:110,
                    }}>
                    {imges.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                stayle.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: colors.white,
                                    width: 50,
                                    height:12

                                },
                            ]}
                        />
                    ))}
                </View>
                <View style={{ marginBottom: 20, }}>
                    {currentSlideIndex == imges.length - 1 ? (
                        <View style={{ height: 130, }}>
                            <TouchableOpacity
                                style={[stayle.btn1, {
                                    backgroundColor: '#2445CD',
                                    marginBottom:20,
                                }]}
                                onPress={() => navigation.navigate('LoginRegisterScreen', { screen: 'Register' })}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFFFFF' }}>
                                    Singup
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[stayle.btn1, {
                                    borderWidth:2,
                                    borderColor:'#2445CD',
                                    backgroundColor:'black',
                                }]}
                                onPress={() => navigation.navigate('LoginRegisterScreen', { screen: 'Login' })}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FFFFFF'}}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 15 ,  borderRadius:50}} />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                                style={stayle.btn}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        color: '#FFFFFF'
                                    }}>
                                    Continue
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    }; 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar backgroundColor={colors.primary} />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={imges}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};
export default Onboarding