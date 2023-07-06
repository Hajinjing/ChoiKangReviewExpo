import {NavigationContainer} from '@react-navigation/native'
import ContentTab from "./ContentTab";
import MainStack from "./MainStack";


const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    );
};

export default Navigation;
