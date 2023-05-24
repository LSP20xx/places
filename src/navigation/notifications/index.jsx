import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NotFound from '../../screens/not-found';

import { COLORS } from '../../constants';

const Stack = createNativeStackNavigator();

const NotificationsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Notificaciones"
            screenOptions={{
                headerStyle: {
                backgroundColor: COLORS.primaryLight, 
                },
                headerTintColor: COLORS.white, 
            }}
        >
            <Stack.Screen name="Notificaciones" component={NotFound} />
        </Stack.Navigator>
    );
};

export default NotificationsNavigator;