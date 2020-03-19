import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/Home';

const HomeScreenStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: 'Home'
        })
    }
});

export default HomeScreenStack;