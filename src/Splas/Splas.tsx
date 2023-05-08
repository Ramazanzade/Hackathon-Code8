import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splas = ({navigation}:any) => {
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate('SplasScreen', { screen: 'Splas2' })  
            navigation.navigate('Splas2')
   
       }, 2000);
    }, []);

    return (
        <View style={styles.container}>
           <Image source={require('../asset/img/0071.jpg')} style={styles.image} />
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
export default Splas