import {useNavigation, useNavigationState} from "@react-navigation/native";
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {Alert, StyleSheet, View, FlatList, Image, Pressable, useWindowDimensions, Platform} from "react-native";
import HeaderRight from "../components/HeaderRight";
import * as MediaLibrary from 'expo-media-library';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {PRIMARY} from "../colors";
import PhotoItem from "./PhotoItem";

const initialListInfo = {endCursor: '', hasNextPage: true};

export const getLocalUri = async (id) => {
    return (await MediaLibrary.getAssetInfoAsync(id)).localUri;
};

const ImagePicker = ({togglePhoto, isSelectedPhoto}) => {
    const navigation = useNavigation();
    const [status, requestPermission] = MediaLibrary.usePermissions();

    const [photos, setPhotos] = useState([]);
    const listInfo = useRef(initialListInfo);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        (async ()=>{
            const {granted} = await requestPermission();
            if (!granted) {
                Alert.alert('사진 접근권한', '사진 접근 권한이 필요합니다.', [
                    {
                        text: '확인',
                        onPress: () => {
                            navigation.canGoBack() && navigation.goBack();
                        },
                    },
                ]);
            }
        }) ();

    }, [navigation, requestPermission]);

    const getPhotos = useCallback(async () => {
        const options = {
            first: 30,
            sortBy: [MediaLibrary.SortBy.creationTime],
        };
        if (listInfo.current.endCursor) {
            options['after'] = listInfo.current.endCursor;
        }
        if (listInfo.current.hasNextPage) {
            const {assets, endCursor, hasNextPage} =
                await MediaLibrary.getAssetsAsync(options);
            setPhotos((prev) => (options.after? [...prev, ...assets] : assets));
            listInfo.current = {endCursor, hasNextPage};
        }
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        listInfo.current = initialListInfo;
        await getPhotos();
        setRefreshing(false);
    }

    // 접근권한이 있어야 getPhotos 호출
    useEffect(()=>{
        if (status?.granted) {
            getPhotos();
        }
    }, [getPhotos, status?.granted]);


    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={photos}
                renderItem={({item}) => (
                    <PhotoItem
                        item={item}
                        togglePhoto={togglePhoto}
                        isSelected={isSelectedPhoto(item)}
                    />
                )}
                numColumns={3}
                onEndReached={getPhotos}
                onEndReachedThreshold={0.4}
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list : {
        width: '100%',
    },
});

export default ImagePicker;
