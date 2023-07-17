import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Pressable} from "react-native";
import PropTypes from "prop-types";
import {useNavigation} from "@react-navigation/native";
import {BLACK} from "../colors";

const HeaderLeft = () => {

    const navigation = useNavigation();

    return (
        <Pressable
            hitSlop={10}
            onPress={()=> navigation.goBack() && navigation.canGoBack()}
        >
            <MaterialCommunityIcons
                name={"chevron-left"}
                size={38}
                color={BLACK}/>
        </Pressable>
    );
};

export default HeaderLeft;
