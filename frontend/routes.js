import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Purchase from './screens/Purchase';
import FlashCard from './screens/FlashCard';

const StackNavigator = createStackNavigator({
	Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  }
})

export default createAppContainer(StackNavigator);
