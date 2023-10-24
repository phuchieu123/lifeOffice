import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHrmPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { View, Text, Button, Icon, Right, Container } from 'native-base';
import { Alert } from 'react-native';
import theme from 'utils/customTheme';
import CustomHeader from 'components/Header'
import ToastCustom from '../../components/ToastCustom';
import {
  makeSelectUserRole,
} from '../App/selectors';
import { MODULE } from '../../utils/constants';
export function HrmPage(props) {
  useInjectReducer({ key: 'hrmPage', reducer });
  useInjectSaga({ key: 'hrmPage', saga });

  const { navigation, hrmRole } = props;
  const { PUT } = hrmRole;

  const handleNavigate = (page) => {
    navigation.navigate(page, { PUT : PUT });
  };

  const handleShowNotice = () => {
    ToastCustom({ text: 'Bạn Chưa Có Quyền Truy Cập', type: 'danger' });
  };

  return (
    <Container>
      <CustomHeader title="Quản lý nhân sự" />
      <View style={styles.content}>
        <View padder style={styles.wrapper}>
          <View style={styles.view}>
            <Button style={styles.buttonStyle} onPress={() => hrmRole.GET ? handleNavigate('Personnel') : handleShowNotice()}>
              <Icon name="users" type="FontAwesome5" style={{ ...styles.icon, fontSize: 65 }} />
              <Text style={styles.text}>Nhân sự</Text>
            </Button>

            <Button style={styles.buttonStyle} onPress={(() => handleNavigate('HrmSalaryPage'))}>
              {/* handleNavigate('HrmSalaryPage') */}
              <Icon name="money" type="FontAwesome" style={{ ...styles.icon, fontSize: 70 }} />
              <Text style={styles.text}>Bảng lương</Text>
            </Button>
          </View>

          <View style={styles.view}>

            <Button
              style={styles.buttonStyle}
              onPress={() => handleNavigate('TimeKeepingPage')}
            // onPress={handleShowNotice}
            >
              <Icon name="calendar" type="FontAwesome" style={{ ...styles.icon, fontSize: 65 }} />
              <Text style={styles.text}>Chấm công</Text>
            </Button>
            {/* <Button style={styles.buttonStyle} onPress={handleShowNotice}>
              <Icon
                name="calendar-check"
                type="FontAwesome5"
                style={{ textAlign: 'center', fontSize: 70, color: '#1cc6c5', margin: 10 }}
              />
              <Text style={styles.text}>Lịch</Text>
            </Button> */}
            <Button style={styles.buttonStyle} onPress={() => handleNavigate('WorkingSchedulePage')}>
              <Icon name="plane" type="FontAwesome" style={{ ...styles.icon, fontSize: 65 }} />
              <Text style={styles.text}>Công tác</Text>
            </Button>
          </View>

          <View style={styles.view}>
            <Button style={styles.buttonStyle} onPress={handleShowNotice}>
              <Icon name="chart-areaspline" type="MaterialCommunityIcons" style={styles.icon} />
              <Text style={styles.text}>BSC/KPI</Text>
            </Button>
            <Button
              style={styles.buttonStyle}
              onPress={() => handleNavigate('HrmReportPage')}
            // onPress={handleShowNotice}
            >
              <Icon name="chart-bar" type="MaterialCommunityIcons" style={styles.icon} />
              <Text style={styles.text}>BÁO CÁO</Text>
            </Button>
          </View>
        </View>
      </View>
      {/* <CustomFooter activePage="Hrm" /> */}
    </Container >
  );
}

const mapStateToProps = createStructuredSelector({
  hrmPage: makeSelectHrmPage(),
  hrmRole: makeSelectUserRole(MODULE.HRM),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HrmPage);

const styles = {
  wrapper: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'stretch',
    backgroundColor: '#eee',
    // borderRadius: 15,
  },
  view: {
    // flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    // backgroundColor: theme.brandPrimary,
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
    borderRadius: 15,
    backgroundColor: 'white',
    margin: 10,
  },
  icon: {
    textAlign: 'center',
    fontSize: 60,
    color: theme.brandPrimary,
    margin: 10,
  },
  text: {
    color: theme.brandPrimary,
    margin: 10,
  },
};
