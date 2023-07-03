import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../screens/home';
import Place from '../../screens/place';
import Places from '../../screens/places';
import Maps from '../../screens/maps';

import { COLORS } from '../../constants';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                backgroundColor: COLORS.primaryLight, 
                },
                headerTintColor: COLORS.white,
            }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Restaurantes" component={Places}/>
            <Stack.Screen name="Bares" component={Places}/>
            <Stack.Screen name="Panaderías" component={Places}/>
            <Stack.Screen name="Cafeterías" component={Places}/>
            <Stack.Screen name="Local" component={Place} />
            <Stack.Screen name="Mapa" component={Maps} />
        </Stack.Navigator>
    );
};

export default MainNavigator;