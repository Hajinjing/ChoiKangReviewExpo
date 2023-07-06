import {Pressable, StyleSheet, View } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {MainRoutes} from "../navigations/routes";
import Constants from "expo-constants";

const TabBarAddButton = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={()=>navigation.navigate(MainRoutes.SELECT_PHOTOS)}
            >
                <MaterialCommunityIcons name="plus" size={25} color={'#fff'}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#E1D7D7',
        borderRadius: 999,
        padding: 10,
    },
});

export default TabBarAddButton;
