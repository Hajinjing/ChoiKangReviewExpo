import {useNavigation} from '@react-navigation/native'
import {Button, Pressable, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {MainRoutes} from "../navigations/routes";
import Constants from "expo-constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {GREY} from "../colors";

const SelectPhotoScreen = () => {
    const navigation = useNavigation();

    const width = useWindowDimensions().width;

    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                이미지는 최대 4장까지 선택 가능합니다.
            </Text>
            <View style={{width, height:width}}>
                <Pressable
                    style={styles.photoButton}
                    onPress={()=>navigation.navigate(MainRoutes.IMAGE_PICKER)}
                >
                <MaterialCommunityIcons
                    name={"image-plus"}
                    size={80}
                />
                </Pressable>

            </View>
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
        paddingTop: Constants.statusBarHeight,
    },
    description: {
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    photoButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default SelectPhotoScreen;
