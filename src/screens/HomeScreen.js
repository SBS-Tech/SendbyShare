import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import NavigationService from '../lib/NavigationService'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerVisible: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            NavigationService.navigate('Details')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
