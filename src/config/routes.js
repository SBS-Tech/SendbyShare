import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailScreen'
// import SignUpScreen from '../screens/SignUpScreen'
import LoginScreen from '../screens/LoginScreen'

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'none'
  }
)
