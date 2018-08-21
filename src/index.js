import React from 'react'
import Navigator from './config/routes'
import NavigationService from './lib/NavigationService'

export default class extends React.Component {
  render() {
    return (
      <Navigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    )
  }
}
