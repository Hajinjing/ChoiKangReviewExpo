import {Image, Pressable,useWindowDimensions, StyleSheet, View, Text, Button } from 'react-native';
import {StatusBar} from "expo-status-bar";
import Header from "../common/Header";
import Constants from "expo-constants";
import { MainRoutes } from "../navigations/routes";
import {useNavigation} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const HomeScreen = () => {
    const navigation = useNavigation();
    const {top} = useSafeAreaInsets();
    const heigth = useWindowDimensions().height /4 ;

    return (
        <View style={styles.container}>
            <Header />
            <Text>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },
});

export default HomeScreen;
