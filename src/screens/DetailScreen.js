import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'react-native-firebase'
import NavigationService from '../lib/NavigationService'

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            NavigationService.navigate('Home')
          }}
        />
        <Button
          title="Signout"
          onPress={async () => {
            await firebase.auth().signOut()
            NavigationService.navigate('Login')
          }}
        />
      </View>
    )
  }
}
