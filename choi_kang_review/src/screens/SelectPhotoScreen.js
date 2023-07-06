import {useNavigation} from '@react-navigation/native'
import {Button, StyleSheet, Text, View} from "react-native";
import {MainRoutes} from "../navigations/routes";
import Constants from "expo-constants";

const SelectPhotoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Select Photo</Text>
            <Button
                title={"Tab"}
                onPress={()=>navigation.navigate(MainRoutes.CONTENT_TAB)}
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

export default SelectPhotoScreen;
