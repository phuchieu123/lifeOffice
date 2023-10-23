import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LifeDriver from '../LifeDriver';
import HrmPage from '../HrmPage';
import Home from '../Home';
import ProjectPage from '../ProjectPage';
import NotificationPage from '../NotificationPage';
const AppHome = () => {
  const Tab = createBottomTabNavigator();
  // useEffect(() => {
  //   //get username
  //   AsyncStorage.getItem('username').then(res => {
  //     setUsename(res);
  //   });
  //   // get domain
  //   AsyncStorage.getItem('domain').then(res => {
  //     setDomain(res);
  //   });
  // }, []);
  const TabArr = [
    {
      route: 'Home',
      label: 'Home',
      icon: Icon,
      activeIcon: 'home',
      inActiveIcon: 'grid-outline',
      component: Home,
    },
    {
      route: 'HRM',
      label: 'HRM',
      icon: Icon,
      activeIcon: 'users',
      inActiveIcon: 'grid-outline',
      component: HrmPage,
    },
    {
      route: 'Project',
      label: 'Project',
      icon: MaterialIcons,
      activeIcon: 'business-center',
      inActiveIcon: 'grid-outline',
      component: ProjectPage,
    },
    {
      route: 'LifeDriver',
      label: 'LifeDriver',
      icon: Ionicons,
      activeIcon: 'folder-open-sharp',
      inActiveIcon: 'grid-outline',
      component: LifeDriver,
    },
    {
      route: 'thong bao',
      lable: 'thong bao',
      icon: MaterialIcons,
      activeIcon: 'notifications',
      inActiveIcon: 'grid-outline',
      component: NotificationPage,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,

          backgroundColor: 'green',
        },
      }}>
      {/* map trả về các tabBar component của trang home */}
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={({route}) => ({
              tabBarLabel: ({focused}) => {
                if (focused) {
                  // Hiển thị tabBarLabel khi được tập trung
                  return (
                    <Text style={{color: 'white', paddingBottom: 5}}>
                      {route.name}
                    </Text>);
                } else {
                  // Ẩn tabBarLabel khi không được tập trung
                  return null;
                }
              },
              tabBarIcon: ({color, focused}) => (
                <item.icon
                  name={item.activeIcon}
                  style={
                    focused ? {color: 'white'} : {color: 'white', opacity: 0.5}
                  }
                  size={25}></item.icon>
              ),
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default AppHome;
