import {StyleSheet, View, Image, Pressable, useWindowDimensions} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {PRIMARY} from "../colors";
import { memo } from 'react'
import PropTypes from "prop-types";

const PhotoItem = memo(({item, isSelected, togglePhoto}) => {
    const width = useWindowDimensions().width / 3;

    return (
        <Pressable
            style={{width, height: width}}
            onPress={() => togglePhoto(item)}
        >
            <Image source={{uri: item.uri}} style={styles.photo}/>
            {isSelected && (
                <View
                    style={[StyleSheet.absoluteFill, styles.checkIcon]}
                >
                    <MaterialCommunityIcons
                        name={"check-circle"}
                        size={40}
                        color={PRIMARY.DEFAULT}
                    />
                </View>
            )}
        </Pressable>

    );
});

PhotoItem.displayName = 'PhotoItem';

PhotoItem.propTypes = {
    item: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    togglePhoto: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    photo: {
        width: '100%',
        height: '100%',
    },
    checkIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
});

export default PhotoItem;
