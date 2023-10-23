import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {ImageBackground, Image, Dimensions} from 'react-native';
// import styled from 'styled-components';
import images from '../../../images';
const deviceHeight = Dimensions.get('window').height;
function Background(props) {
  const {imageUrl, children} = props;
  return (
    <Image resizeMode="cover" style={styles.image} source={images.loginBg} />
  );
}
export default Background;
const styles = {
  image: {
    position: 'absolute',
    width: '100%',
    height: deviceHeight,
  },
};
