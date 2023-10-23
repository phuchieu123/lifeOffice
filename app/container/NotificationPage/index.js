import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
const styles= StyleSheet.create({
    bannerHome:{
        backgroundColor: 'rgba(46, 149, 46, 1)',
        height: 50,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    textBanner:{
        color:'white',
        paddingLeft: 10,
        fontSize: 20
    },
    iconBanner:{
        paddingRight: 10,
        color: 'white',
        fontSize: 20
    }
})
export default Notification = () => {
    
    return (
        <View>
            <View style={styles.bannerHome}>
                <Text style={styles.textBanner}>Thông báo</Text>
                <Icon name='filter' style={styles.iconBanner}></Icon>
            </View>
        </View>
    );
};


