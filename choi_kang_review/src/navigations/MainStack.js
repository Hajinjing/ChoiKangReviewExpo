import ContentTab from "./ContentTab";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { MainRoutes } from "./routes";
import SelectPhotoScreen from "../screens/SelectPhotoScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: {backgroundColor:'white'},
                headerShown: false,
            }}
        >
            <Stack.Screen name={MainRoutes.CONTENT_TAB} component={ContentTab}/>
            <Stack.Screen name={MainRoutes.SELECT_PHOTOS} component={SelectPhotoScreen}/>
        </Stack.Navigator>
    );
};

export default MainStack;
