import {NavigationContainer} from '@react-navigation/native'
import ContentTab from "./ContentTab";
import MainStack from "./MainStack";
import {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen';
import AuthStack from "./AuthStack";

const ImageAssets = [
    require('../../assets/cover.jpeg'),
    require('../../assets/home-clock.png'),
    require('../../assets/home-map.png'),
    require('../../assets/icon.png'),
];

const Navigation = () => {

    // useEffect(()=>{
    //     (async ()=>{
    //         try {
    //             await SplashScreen.preventAutoHideAsync();
    //
    //             await Promise.all(
    //                 ImageAssets.map((image)=>
    //                     Asset.fromModule(image).downloadAsync()
    //                     )
    //             );
    //         } catch (e) {
    //
    //         }
    //     })();
    // });

    return (
        <NavigationContainer>
            <MainStack/>
            {/*<AuthStack/>*/}
        </NavigationContainer>
    );
};

export default Navigation;
