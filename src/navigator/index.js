import { createStackNavigator , createAppContainer } from 'react-navigation';

import DrinksList from '../screens/DrinksList';

const AppNavigator = createStackNavigator ({
    Home : {
        screen: DrinksList
    }
});

export default createAppContainer(AppNavigator);