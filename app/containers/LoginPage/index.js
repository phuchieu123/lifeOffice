import _ from 'lodash';
import { Button, Icon, Input, Item, Spinner, Text, View } from 'native-base';
import React, { memo, useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { CONFIG, LIST_CONFIG } from '../../../urlConfig';
import { navigate } from '../../RootNavigation';
import { getApproveToken, getDriverToken, getToken, login } from '../../api/oauth';
import { RenderBanner } from '../../components/RenderBanner';
import ToastCustom from '../../components/ToastCustom';
import { DOMAIN_URL, getConfig } from '../../configs/Paths';
import request from '../../utils/request';
import { getData, storeData } from '../../utils/storage';
import Background from './components/Background';
import styles from './styles';

export function LoginPage(props) {
  const [isBusy, setIsBusy] = useState(false);
  const [localData, setLocalData] = useState({})
  const [logo, setLogo] = useState("");
  const [isLoadingLogo, setIsLoadingLogo] = useState(false);

  const [err, setErr] = useState({})
  const [isSecureEntry, setIsSecureEntry] = useState(true)

  useEffect(() => {
    init()
  }, [])


  const init = async () => {
    const domain = await DOMAIN_URL()
    const username = await getData('username')
    setLocalData({
      domain,
      username,
      // domain: 'ievn.lifetek.vn',
      // username: 'maihtn4x',
      // password: '12345678',

      // domain: 'qlkh.ievn.com.vn',
      // username: 'maihtn4x',
      // password: '12345678',

      // domain: 'internal.lifetek.vn',
      // username: 'bachdv@lifetek.vn',
      // password: '12345678',

      // domain: 'stagingerp.lifetek.vn',
      // username: 'admin999',
      // password: '12345678',

      // domain: 'crm.lifetek.vn',
      // username: 'admin3300',
      // password: 'legBHE84',


      // domain: 'maw.lifetek.vn',
      // username: 'admin_maw',
      // password: '12345678',


      // domain: 'quanlytoanha.lifetek.vn',
      // username: 'nhungpth',
      // password: '123456789',
    })
  };

  const handleLogin = async () => {
    const { domain, username, password } = localData
    try {
      let isValid = {};
      let loginSuccess;
      if (!domain) isValid.domain = true
      if (!username) isValid.username = true
      if (!password) isValid.password = true
      if (!Object.keys(isValid).length) {
        setIsBusy(true);
        const data = {
          username: username.trim(),
          password: password,
          domain,
          grant_type: 'password',
          scope: 'user',
          client_id: 'authServer',
        };
        const config = await getConfig(domain)
        console.log('config', config)
        if (config.appUrl) {
          const isLogin = await login(data)
          if (isLogin) {
            const result = await Promise.all([
              getToken(),
              getApproveToken(),
              getDriverToken(),
            ])
            console.log(result, "token");
            if (result.length === result.filter(e => e).length) {
              await storeData('username', data.username)
              navigate('LoadingScreen')
              loginSuccess = true
            }
          }
        }
        if (!loginSuccess) ToastCustom({ text: 'Đăng nhập thất bại', type: 'danger' })
      } else setErr(isValid)
    } catch (error) {
      console.log('error', error)
    }
    setIsBusy(false);
  }
  const onChange = async (key, val) => {
    setLocalData(e => ({ ...e, [key]: val }))
    err[key] && setErr(e => ({ ...e, [key]: false }))
    let regExp = /^[A-Za-z][\w$.]+\.[\w]+\.\w+$/;
    if ((regExp.test(val) && (val.substr(val.length - 3) === '.vn'))) {
      let api = Object.values((await getConfig(val)))[2].concat("/api/system-config");
      const getAPI = async () => {
        try {
          let url = `${await api}`;
          const body = { method: 'GET' };
          const response = await request(url, body);
          setLogo(response && response.logo);
        } catch (err) { 
          console.log(err)
        }
        return {}
      }
      setIsLoadingLogo(true)
      getAPI();
    } else {
      setIsLoadingLogo(false)
    }
  }

  return (
    <View style={styles.content} >
      <Background />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
        <View style={styles.form}>
          {_.get(LIST_CONFIG, `${CONFIG}.HOSTNAME`) ? null : <Item rounded last style={styles.input} error={err.domain} disabled={isBusy}>
            <Icon active name="domain" type="MaterialIcons" />
            <Input
              placeholder={"Tên miền"}
              value={localData.domain}
              onChangeText={e => onChange('domain', e)}
              disabled={isBusy}
              autoCapitalize="none"
            />
            {isLoadingLogo ? <Image
              style={{ width: 60, height: 60, position: 'absolute', right: 20, resizeMode: "contain" }}
              source={{
                uri: logo,
              }}
            /> : null}
          </Item>}

          <Item rounded last style={styles.input} error={err.username} disabled={isBusy}>
            <Icon active name="person" type="MaterialIcons" />
            <Input
              placeholder={"Tài khoản"}
              value={localData.username}
              onChangeText={e => onChange('username', e)}
              disabled={isBusy}
              autoCapitalize="none"
            />
          </Item>
          <Item rounded last style={styles.input} error={err.password} disabled={isBusy}>
            <Icon active name="vpn-key" type="MaterialIcons" color="white" />
            <Input
              placeholder={"Mật khẩu"}
              secureTextEntry={isSecureEntry}
              value={localData.password}
              onChangeText={e => onChange('password', e)}
              disabled={isBusy}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              onPress={() => { setIsSecureEntry((prev) => !prev) }}>
              <Icon active name="eye" type="AntDesign" color="white">{isSecureEntry}</Icon>
            </TouchableOpacity>
          </Item>

          <Button block rounded dark style={styles.loginBtn} onPress={handleLogin} disabled={isBusy}>
            {isBusy && <Spinner color="gray" />}
            {!isBusy ? <Text style={styles.loginBtnText}>{"Đăng nhập"}</Text> : null}
          </Button>
        </View>
        <RenderBanner viewStyle={{ height: 200, width: '100%', bottom: 0, alignSelf: 'center', zIndex: 100 }} />
      </KeyboardAvoidingView>
    </View >
  );
}

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(LoginPage);
