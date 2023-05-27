import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS } from "../../constants";
import MainNavigator from "../main";
import FavoritesNavigator from "../favorites";
import NotificationsNavigator from "../notifications";
import ProfileNavigator from "../profile";


const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (<BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: COLORS.primary,
                fontSize: 20,
                
            },
            tabBarActiveTintColor: COLORS.white,
            tabBarInactiveTintColor: COLORS.white,
            tabBarInactiveBackgroundColor: COLORS.primaryLight,
            tabBarLabelStyle: {
                fontSize: 12,
            }
        
        }}>
            <BottomTab.Screen
                name="MainTab"
                component={MainNavigator}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({
                        focused, color, size }) => (
                            <Ionicons
                                name={"home"}
                                color={color}
                                size={size}
                            />
                        )
                }}
            />
            <BottomTab.Screen
                name="FavoritesTab"
                component={FavoritesNavigator}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({
                        focused, color, size }) => (
                            <Ionicons
                                name={"heart"}
                                color={color}
                                size={size}
                            />
                        )
                }}
            />
            <BottomTab.Screen
                name="NotificationsTab"
                component={NotificationsNavigator}
                options={{
                    tabBarLabel: "Notificaciones",
                    tabBarIcon: ({
                        focused, color, size }) => (
                            <Ionicons
                                name={"notifications"}
                                color={color}
                                size={size}
                            />
                        )
                }}
            />
            <BottomTab.Screen
                name="ProfileTab"
                component={ProfileNavigator}
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({
                        focused, color, size }) => (
                            <Ionicons
                                name={"person"}
                                color={color}
                                size={size}
                            />
                        )
                }}
            />
        </BottomTab.Navigator>
    );
};


export default TabsNavigator;