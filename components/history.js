import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Header from './header'
const getWarning = (image) => {
        switch (image) {
            case "A":
                //return require('../assets/images/wallpaper1.jpg')
                break;
            case "B":
                //return require('../assets/images/wallpaper2.jpg')
                break;
            case "C":
                //return require('../assets/images/wallpaper3.jpg')
                break;
        }
}
const History = () => {
    return (
        <View>
            <Header/>

        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default History;