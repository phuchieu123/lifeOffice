import React,{ useState } from 'react'
import {TouchableOpacity,TextInput, Image} from 'react-native'
import { NativeBaseProvider } from 'native-base';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './app/container/Login';
import AppHome from './app/container/App';
const Stack = createNativeStackNavigator()
const App =()=>{
    
return ( 
    <NativeBaseProvider>
     <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='AppHome' component={AppHome}/>
        </Stack.Navigator>
    </NavigationContainer> 
    </NativeBaseProvider>
     
)   
}
    
export default App  