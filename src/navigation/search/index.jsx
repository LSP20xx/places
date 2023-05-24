import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Place from '../../screens/place';
import Places from '../../screens/places';

import { COLORS } from '../../constants';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Lugares"
            screenOptions={{
                headerStyle: {
                backgroundColor: COLORS.primaryLight, 
                },
                headerTintColor: COLORS.white, 
            }}
        >
            <Stack.Screen name="Lugar" component={Place} />
            <Stack.Screen name="Lugares" component={Places} />
        </Stack.Navigator>
    );
};

export default SearchNavigator;