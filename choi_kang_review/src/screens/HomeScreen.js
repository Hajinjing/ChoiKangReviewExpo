import { StyleSheet, View, Text, Button } from 'react-native';
import {StatusBar} from "expo-status-bar";
import Header from "../common/Header";
import Constants from "expo-constants";
import { MainRoutes } from "../navigations/routes";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header />
            <Text>Home</Text>
            <Button
                title={"Select"}
                onPress={()=>navigation.navigate(MainRoutes.SELECT_PHOTOS)}
            />
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
