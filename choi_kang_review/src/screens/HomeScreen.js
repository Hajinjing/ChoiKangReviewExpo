import { StyleSheet, View, Text } from 'react-native';
import {StatusBar} from "expo-status-bar";
import Header from "../common/Header";
import Constants from "expo-constants";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
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
