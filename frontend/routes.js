import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Purchase from './screens/Purchase';
import FlashCard from './screens/FlashCard';

const AuthScreens = createStackNavigator(
  {
    Login
  },
  {
    initialRouteName: 'Login',
    headerShown: false,
    headerMode: 'none'
  }
)

const HomeScreens = createStackNavigator(
  {
    Home,
    Profile,
    Purchase,
    FlashCard
  },
  {
    initialRouteName: 'Home'
  }
)

const StackNavigator = createStackNavigator(
  {
  	Auth: AuthScreens,
    Home: HomeScreens
  },
  {
    initialRouteName: 'Auth',
    headerShown: false,
    headerMode: 'none'
  }
)


export default createAppContainer(StackNavigator);
