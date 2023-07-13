import {useNavigation, useRoute} from '@react-navigation/native'
import {Alert, Button, Platform, Pressable, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {MainRoutes} from "../navigations/routes";
import Constants from "expo-constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {GRAY} from "../colors";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {getLocalUri} from "../components/ImagePicker";
import HeaderRight from "../components/HeaderRight";

const SelectPhotoScreen = () => {
    const navigation = useNavigation();
    const { params } = useRoute();

    const width = useWindowDimensions().width;

    const [photos, setPhotos] = useState([]);
    const [disabled, setDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        if (params) {
            setPhotos(params.selectedPhotos ?? []);
        }

    }, [params]);

    useEffect(()=>{
        setDisabled(isLoading || !photos.length);
    }, [isLoading, photos.length]);

    const onSubmit = useCallback(async () => {
        if (!disabled) {
            setIsLoading(true);
            try {
                const localUris = await Promise.all(
                    photos.map((photo) =>
                        Platform.select({
                            ios: getLocalUri(photo.id),
                            android: photo.uri,
                        })
                    )
                )
                console.log(localUris);
            } catch (e) {
                Alert.alert('사진 정보 조회 실패', e.message);
            }
            setIsLoading(false);
        }
    }, [disabled, photos]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderRight disabled={disabled} onPress={onSubmit}/>
            ),
        });
    }, [navigation, disabled, onSubmit])

    return (
        <View style={styles.container}>
            <Text style={styles.description}>
                이미지는 최대 4장까지 선택 가능합니다.
            </Text>
            <View style={{width, height:width}}>
                <Pressable
                    style={styles.photoButton}
                    onPress={()=>
                        navigation.navigate(MainRoutes.IMAGE_PICKER, {maxCount: 4})
                    }
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
        // paddingTop: Constants.statusBarHeight,
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
        backgroundColor: GRAY
    }

});

export default SelectPhotoScreen;
