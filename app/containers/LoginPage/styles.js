const React = require('react-native');

const { Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  content: {
    flex: 1,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    top: '10%'
  },
  input: {
    width: '75%',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
  },
  loginBtn: {
    width: '75%',
    marginTop: 5,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',

  },
  loginBtnText: {
    color: '#FFF',
  },
  checkbox: {
    bottom: 3,
  },
};
