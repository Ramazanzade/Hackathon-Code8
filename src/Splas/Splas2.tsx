import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splas2 = ({navigation}:any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnboardingScreen')
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
      <Image source={require('../asset/img/0072.jpg')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor:'black'
    },
});
export default Splas2