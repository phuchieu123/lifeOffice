import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {Button, Title, Container, Right } from 'native-base';
import { Image, Alert, ScrollView, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
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
    },
    container: {
        height: 'auto',
      },
      videoContainer: {
    
        height: 140,
        backgroundColor: 'black',
        borderRadius: 20
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
      textButton: { color: 'black', margin: 10, fontSize: 30, fontWeight: 'bold' },
      textNote: { color: 'black', margin: 10, fontSize: 12 },
})
export default Home = () => {
    
    return (
        <Container>
            <View style={styles.bannerHome}>
                <Text style={styles.textBanner}>Trang chủ</Text>
                <Icon name='filter' style={styles.iconBanner}></Icon>
            </View>
            <View style={{ flex: 1, backgroundColor: '#eee' }}>
        {/* <ScrollView>
          <View style={{ flex: 1, backgroundColor: '#99CC99', paddingBottom: 0 }}>
            <Image
              resizeMode="contain"
              
              style={{
                flex: 1,
                margin: 10,
                width: 120,
                height: 120,
                alignSelf: 'center',
                resizeMode: 'cover',
                borderWidth: 2,
                borderRadius: 75,
              }}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0, marginBottom: 40 }}>
              <Title>Nguyen Phuc Hieu</Title>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10, right: 0 }}>
              <MaterialCommunityIcons name="message-text" style={{ paddingRight: 5, fontSize: 30, color: '#fff', marginLeft: 15, marginRight: 5 }} />
              <Icon onPress={() => navigation.navigate('SettingPage')} name='user-circle' type='FontAwesome' style={{ paddingRight: 10, fontSize: 30, color: '#fff' }} />
              <Ionicons onPress={() => navigation.navigate('FingerprintUser')} name='settings' type='Ionicons' style={{ paddingRight: 10, fontSize: 30, color: '#fff' }} />
            </View>
          </View>
          <View padder style={styles.wrapper}>
            <View style={styles.view}>
              {true &&
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Approve')}>
                  <Icon
                    name="playlist-add-check"
                    type="MaterialIcons"
                    style={{ textAlign: 'center', fontSize: 40, color: 'green', margin: 10 }}
                  />
                  <Text style={{ color: 'black', margin: 10, textAlign: 'center' }}>Phê duyệt</Text>
                  <Badge count={_.has(approvePage, 'approveCount[0].count') ? _.get(approvePage, 'approveCount[0].count') : countApprove} />
                </TouchableOpacity>
              }

              {!customerRole.GET ? null : <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CustomerDetails')}>
                <Icon
                  name="users"
                  type="FontAwesome5"
                  style={{ textAlign: 'center', fontSize: 40, color: 'green', margin: 10 }}
                />
                <Text style={{ color: 'black', margin: 10, textAlign: 'center' }}>Khách hàng</Text>
              </TouchableOpacity>
              }

            </View>
            <View style={styles.view}>
              {!inComingDocumentRole.GET ? null :
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Officialdispatch', { type: 2 })} >
                  <Icon
                    name="clipboard-arrow-down"
                    type="MaterialCommunityIcons"
                    style={{ textAlign: 'center', fontSize: 40, color: 'green', margin: 10 }}
                  />
                  <Text style={{ color: 'black', margin: 10, textAlign: 'center' }}>Công văn đến</Text>
                  <Badge count={incomingData} />
                </TouchableOpacity>
              }

              {!outGoingDocumentRole.GET ? null :
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Officialdispatch', { type: 1 })}>
                  <Icon
                    name="clipboard-arrow-up"
                    type="MaterialCommunityIcons"
                    style={{ textAlign: 'center', fontSize: 40, color: 'green', margin: 10 }}
                  />
                  <Text style={{ color: 'black', margin: 10, textAlign: 'center' }}>Công văn đi</Text>
                  <Badge count={outgoingData} />
                </TouchableOpacity>
              }

            </View>
            {/* <View style={styles.view}>
              {(clientId !== 'HADO') ? null :
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TextManagement', { type: 0 })} >
                  <Icon
                    name="clipboard-arrow-down"
                    type="MaterialCommunityIcons"
                    style={{ textAlign: 'center', fontSize: 40, color: 'green', margin: 10 }}
                  />
                  <Text style={{ color: 'black', margin: 10, textAlign: 'center' }}>Văn bản đến</Text>
                  <Badge count={incomingData} />
                </TouchableOpacity>
              }

              {(clientId !== 'HADO') ? null :
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TextManagement', { type: 1 })}>
                  <Icon
                    name="clipboard-arrow-up"
                    type="MaterialCommunityIcons"
                    style={{ textAlign: 'center', fontSize: 40, color: 'green', margin: 10 }}
                  />
                  <Text style={{ color: 'black', margin: 10, textAlign: 'center' }}>Văn bản đi</Text>
                  <Badge count={outgoingData} />
                </TouchableOpacity>
              }

            </View> */}

            {/* <RenderBanner viewStyle={{ height: 180, borderRadius: 20, margin: 5 }} />
            {(clientId !== 'HADO') ? null : <ManageDocument navigation={navigation} incomingData={incomingData} outgoingData={outgoingData} />}
            {!bosRole.GET ? null : <DashBoardBos navigation={navigation} kanbanBosConfigs={kanbanBosConfigs} query={query} />}
            {!taskRole.GET ? null : <DashBoardTask navigation={navigation} kanbanTaskConfigs={kanbanTaskConfigs} query={query} />}
            {!inComingDocumentRole.GET ? null : <IncomingDocument />}
            {!calendarRole.GET ? null : <MeetingSchedule />}
            {!calendarRole.GET ? null : <WorkingSchedule profile={profile} />}
          </View>
        </ScrollView> */} */}
      </View> 
        </Container>
    );
};





