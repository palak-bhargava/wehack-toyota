import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header_container}>
            <Image
                style={styles.logo_size}
                source={require('../assests/tlogo.png')}
            />
            <Text style={styles.logo_text}>TOYOTA</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
        top:0,
    },
    logo_size:{
        height:45,
        width: 75
    },
    logo_text: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
    }
});

export default Header;