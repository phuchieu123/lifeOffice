import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Button, Title, Container, Right} from 'native-base';
import {
  Image,
  Alert,
  ScrollView,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
  bannerHome: {
    backgroundColor: 'rgba(46, 149, 46, 1)',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBanner: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 20,
  },
  iconBanner: {
    paddingRight: 10,
    color: 'white',
    fontSize: 20,
  },
});
export default Home = () => {
  return (
    <Container>
      <View style={styles.bannerHome}>
        <Text style={styles.textBanner}>Trang chủ</Text>
        <Icon name="filter" style={styles.iconBanner}></Icon>
      </View>
    </Container>
  );
};
