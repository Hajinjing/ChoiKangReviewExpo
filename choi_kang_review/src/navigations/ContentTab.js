import HomeScreen from "../screens/HomeScreen";
import MyPageScreen from "../screens/MyPageScreen";
import { ContentRoutes } from "./routes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import WriteScreen from "../screens/WriteScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const getTabBarIcon = ({ focused, color, size, name }) => {
    const iconName = focused ? name : `${name}-outline`;
    return (
        <MaterialCommunityIcons name={iconName} size={size} color={color} />
    );
};

const ContentTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={ContentRoutes.HOME}
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#E1D7D7'
            }}
        >
            <Tab.Screen
                name={ContentRoutes.HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: (props) => getTabBarIcon({...props, name: 'home'})
                }}
            />
            <Tab.Screen
                name={ContentRoutes.WRITE}
                component={WriteScreen}
                options={{}}
            />
            <Tab.Screen
                name={ContentRoutes.MY_PAGE}
                component={MyPageScreen}
                options={{
                    tabBarIcon: (props) => getTabBarIcon({...props, name: 'account'})
                }}
            />
        </Tab.Navigator>
    );
};

export default ContentTab;
