import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export default LifeDriver = () => {
  const styles = StyleSheet.create({
    bannerHrm: {
      backgroundColor: 'rgba(46, 149, 46, 1)',
      height: 50,
      justifyContent: 'center',
    },
    textBanner: {
      paddingLeft: 10,
      color: 'white',
      fontSize: 20,
    },
  });
  return (
    <View>
      <View style={styles.bannerHrm}>
        <Text style={styles.textBanner}>Kho dữ liệu</Text>
      </View>
    </View>
  );
};
