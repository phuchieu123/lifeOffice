// /**
//  * @format
//  */

// import 'react-native-gesture-handler'; // Navigation Release Mode Crash issue #320
import 'react-native-gesture-handler';
import 'react-native-get-random-values'
import { AppRegistry } from 'react-native';
import { name as appMobile } from './app.json';
import App from './App'
AppRegistry.registerComponent(appMobile, () => App);
