import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import RootNavigator from "./src/navigations/RootNavigator";
import {useCallback} from "react";
import * as Font from "expo-font";
import {View} from "react-native";

export default function App() {
    const [fontsLoaded] = Font.useFonts({
        "default-light": require("./assets/fonts/rubik-light.ttf"),
        "default-regular": require("./assets/fonts/rubik-regular.ttf"),
        "default-medium": require("./assets/fonts/rubik-medium.ttf"),
        "default-bold": require("./assets/fonts/rubik-bold.ttf"),
        "default-black": require("./assets/fonts/rubik-black.ttf"),
    })


    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
           console.log("hide splash screen")
        }
    },[fontsLoaded])

    if(!fontsLoaded){
        return null;
    }

    return (
        <View style={{flex:1}} onLayout={onLayoutRootView}>
            <Provider store={store}>
                <RootNavigator/>
            </Provider>
        </View>

    );
}
