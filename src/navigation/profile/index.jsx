import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants';
import { NotFound } from '../../screens';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Perfil"
            screenOptions={{
                headerStyle: {
                backgroundColor: COLORS.primaryLight, 
                },
                headerTintColor: COLORS.white, 
            }}
        >
            <Stack.Screen name="Perfil" component={NotFound} />
            </Stack.Navigator>
    );
};

export default ProfileNavigator;