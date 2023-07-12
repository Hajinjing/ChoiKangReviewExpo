import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Pressable} from "react-native";
import PropTypes from "prop-types";
import {useNavigation} from "@react-navigation/native";
import {BLACK} from "../colors";

const HeaderLeft = () => {

    const navigation = useNavigation();

    return (
        <Pressable onPress={()=> navigation.goBack && navigation.canGoBack()} hitSlop={10}>
            <MaterialCommunityIcons
                name={"chevron-left"}
                size={38}
                color={BLACK}/>
        </Pressable>
    );
};

export default HeaderLeft;
