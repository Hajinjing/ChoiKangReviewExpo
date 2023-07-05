import ContentTab from "./ContentTab";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={MainRoutes.CONTENT_TAB} component={ContentTab}/>
        </Stack.Navigator>
    );
};

export default MainStack;
