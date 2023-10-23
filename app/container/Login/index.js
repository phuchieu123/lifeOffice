import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button, Spinner, Text, View } from 'native-base';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Background from './components/Background';
import styles from './styles';
const Login = () => {
  const navigation = useNavigation();
  const [isBusy, setIsBusy] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [localData, setLocalData] = useState({
    domain: '',
    username: '',
    password: '',
  });
  const dataLogin = {
    domain: 'lifetek',
    username: 'NPH',
    password: '04052005',
  };
  const handleChange = (name, value) => {
    setLocalData({
      ...localData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if (
      localData.domain === dataLogin.domain &&
      localData.username === dataLogin.username &&
      localData.password === dataLogin.password
    ) {
      AsyncStorage.setItem('domain', dataLogin.domain);
      AsyncStorage.setItem('username', dataLogin.username);
      AsyncStorage.setItem('password', dataLogin.password);

      navigation.navigate('AppHome');
    } else if (
      !localData.domain ||
      !localData.username ||
      !localData.password
    ) {
      Alert.alert('Nhập thiểu trường rồi');
    } else {
      Alert.alert('Tài khoản hoặc mật khẩu sai');
    }
  };

  return (
    <View style={styles.content}>
      <Background />
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.form}>
          {/* bắt đầu input domain */}
          <View style={styles.host}>
            <MaterialIcons
              active
              name="domain"
              type="MaterialIcons"
              style={{padding: 10, color: 'black'}}
            />
            <TextInput
              style={{flex: 1}}
              name="domain"
              placeholder={'Tên miền'}
              value={localData.domain}
              onChangeText={text => handleChange('domain', text)}
              disabled={isBusy}
              autoCapitalize="none"
              autoFocus={true}
              returnKeyType="next"
            />
          </View>
          {/* bắt đầu input đăng nhập */}
          <View rounded last style={styles.input} disabled={isBusy}>
            <Icon active name="user" style={{padding: 10, color: 'black'}} />
            <TextInput
              placeholder={'Tên đăng nhập'}
              name="username"
              value={localData.username}
              onChangeText={text => handleChange('username', text)}
              disabled={isBusy}
              autoCapitalize="none"
              style={{flex: 1}}
              returnKeyType="next"
            />
          </View>
          {/* bắt đầu input mật khẩu */}
          <View rounded last style={styles.input} disabled={isBusy}>
            <MaterialIcons
              active
              name="vpn-key"
              style={{padding: 10, color: 'black'}}
            />
            <TextInput
              placeholder={'Mật khẩu'}
              name="password"
              value={localData.password}
              secureTextEntry={isSecureEntry}
              onChangeText={text => handleChange('password', text)}
              disabled={isBusy}
              autoCapitalize="none"
              style={{flex: 1}}
              returnKeyType="done"
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 20,
              }}
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Icon active name="eye" color="black"></Icon>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Button
              block
              rounded
              dark
              style={styles.loginBtn}
              disabled={isBusy}
              onPress={handleLogin}>
              {isBusy && <Spinner color="gray" />}
              {!isBusy ? (
                <Text style={styles.loginBtnText}>Đăng nhập</Text>
              ) : null}
            </Button>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
