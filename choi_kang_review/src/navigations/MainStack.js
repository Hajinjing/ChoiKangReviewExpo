import ContentTab from "./ContentTab";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { MainRoutes } from "./routes";
import SelectPhotoScreen from "../screens/SelectPhotoScreen";
import HeaderLeft from "../components/HeaderLeft";
import ImagePickerScreen from "../screens/ImagePickerScreen";
import {WHITE} from "../colors";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: {backgroundColor:WHITE},
                headerLeft: HeaderLeft,
                title: '',
            }}
        >
            <Stack.Screen name={MainRoutes.CONTENT_TAB} component={ContentTab} options={{headerShown:false}}/>
            <Stack.Screen name={MainRoutes.SELECT_PHOTOS} component={SelectPhotoScreen}/>
            <Stack.Screen name={MainRoutes.IMAGE_PICKER} component={ImagePickerScreen}/>
        </Stack.Navigator>
    );
};

export default MainStack;
