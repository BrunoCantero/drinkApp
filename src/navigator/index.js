import {  createAppContainer, createBottomTabNavigator} from 'react-navigation';

import DrinksList from '../screens/DrinksList';

const AppNavigator = createBottomTabNavigator ({
    Home: DrinksList,
});

export default createAppContainer(AppNavigator);