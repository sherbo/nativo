import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import DeckEditor from './screens/DeckEditor';
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
    Purchase,
    FlashCard
  }
)

const ProfileScreens = createStackNavigator(
  {
    Profile,
    DeckEditor
  }
)

const StackNavigator = createStackNavigator(
  {
  	Auth: AuthScreens,
    Home: HomeScreens,
    Profile: ProfileScreens
  },
  {
    initialRouteName: 'Auth',
    headerShown: false,
    headerMode: 'none'
  }
)


export default createAppContainer(StackNavigator);
