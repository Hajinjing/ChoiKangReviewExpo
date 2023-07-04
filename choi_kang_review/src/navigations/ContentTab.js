import HomeScreen from "../screens/HomeScreen";
import MyPageScreen from "../screens/MyPageScreen";
import { ContentRoutes } from "./routes";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import WriteScreen from "../screens/WriteScreen";

const Tab = createBottomTabNavigator();
const ContentTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={ContentRoutes.HOME} component={HomeScreen} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name={ContentRoutes.WRITE} component={WriteScreen} options={{headerShown:false}}></Tab.Screen>
            <Tab.Screen name={ContentRoutes.MYPAGE} component={MyPageScreen} options={{headerShown:false}}></Tab.Screen>
        </Tab.Navigator>
    );
};

export default ContentTab;
