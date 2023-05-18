import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Place from '../../screens/place';
import Places from '../../screens/places';

import { theme } from '../../constants';

const stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <stack.Navigator
            initialRouteName="Lugares"
            screenOptions={{
                headerStyle: {
                backgroundColor: theme.colors.primary, 
                },
                headerTintColor: theme.colors.white, 
            }}
        >
            <stack.Screen name="Lugar" component={Place} />
            <stack.Screen name="Lugares" component={Places} />
        </stack.Navigator>
    );
};

export default MainNavigator;