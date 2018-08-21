import React from 'react'
import { StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'
import {GoogleSignin} from 'react-native-google-signin'

import SBSApp from './src/index'
import NavigationService from './src/lib/NavigationService'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // firebase things?
    }
  }

  componentDidMount() {
    GoogleSignin.configure({
      iosClientId: '613306350190-l2kt16h9km8r3p2ep6if55vnvd45roct.apps.googleusercontent.com', // only for iOS
    });

    firebase.auth().onAuthStateChanged(user => {
      NavigationService.navigate(user ? 'Details' : 'Login')
    })
  }

  render() {
    return <SBSApp />
  }
}


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import firebase from 'react-native-firebase'
// import { GoogleSigninButton, GoogleSignin } from 'react-native-google-signin'
// import Navigator from './src/config/routes'
// import NavigationService from './src/lib/NavigationService'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   componentDidMount() {
//     GoogleSignin.configure({
//       iosClientId: '613306350190-l2kt16h9km8r3p2ep6if55vnvd45roct.apps.googleusercontent.com', // only for iOS
//     });
//   }

//   _signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       this.setState({ userInfo });
//       console.log(userInfo)
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (f.e. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <GoogleSigninButton
//           style={{ width: 48, height: 48 }}
//           size={GoogleSigninButton.Size.Icon}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={this._signIn}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
