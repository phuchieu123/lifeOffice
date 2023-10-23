import { Container, Title } from 'native-base';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const styles = StyleSheet.create({
  bannerHome: {
    width: '100%',
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
  container: {
    height: 'auto',
  },
  videoContainer: {
    height: 140,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    bottom: 20,
    // flex: 1,
    height: 'auto',
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    backgroundColor: '#eee',
    marginTop: 10,
    // borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  view: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
    borderRadius: 15,
    backgroundColor: 'white',
    margin: 3,
    paddingVertical: 5,
  },
  textButton: {color: 'black', margin: 10, fontSize: 30, fontWeight: 'bold'},
  textNote: {color: 'black', margin: 10, fontSize: 12},
});
export default Home = () => {
  return (
    <Container style={{width: '100%'}}>
      <View style={styles.bannerHome}>
        <Text style={styles.textBanner}>Trang chủ</Text>
        <Icon name="filter" style={styles.iconBanner}></Icon>
      </View>

       <View style={{backgroundColor: '#eee', width: '100%'}}>
        <ScrollView>
          <View style={{backgroundColor: '#99CC99', paddingBottom: 0}}>
            <Image
              resizeMode="contain"
              source={require('../../images/logo.jpg')}
              style={{  
                margin: 10,
                width: 120,
                height: 120,
                alignSelf: 'center',
                resizeMode: 'cover',
                borderWidth: 2,
                borderRadius: 75,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 0,
                marginBottom: 40,
              }}>
              <Text> 
                {/* {profile.name} */}
                 Nguyễn Phúc Hiẻu
              </Text>
            </View> 
            {/* <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: 10,
                right: 0,
              }}>
              <MaterialCommunityIcons
                name="message-text"
                style={{paddingRight: 5, fontSize: 30}}
              />
              <Icon
                name="user-circle"
                type="FontAwesome"
                style={{paddingRight: 10, fontSize: 30, color: '#fff'}}
              />
              <Icon
                name="settings"
                type="Ionicons"
                style={{paddingRight: 10, fontSize: 30, color: '#fff'}}
              />
            </View>
          </View>  */}

          {/* test đến đây  */}
           {/* <View style={styles.wrapper}>
            <View style={styles.view}>
              <TouchableOpacity style={styles.button}>
                <MaterialIcons
                  name="playlist_add_check"
                  type="MaterialIcons"
                  style={{
                    textAlign: 'center',
                    fontSize: 40,
                    color: 'green',
                    margin: 10,
                  }}
                />
                <Text style={{color: 'black', margin: 10, textAlign: 'center'}}>
                  Phê duyệt
                </Text>
              </TouchableOpacity>
            </View>*/}
          </View> 
        </ScrollView>
      </View> 
    </Container>
  );
};
