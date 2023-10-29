import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import LoadingLayout from "../loading/LoadingLayout";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";


const RootStack = createStackNavigator();

export default function () {
    const { userData } = useAppSelector(state => state.user)
    const { isLoading } = useAppSelector(state => state.config);
    const dispatch = useAppDispatch();


    useEffect(() => {
        AsyncStorage.multiGet(["AccessToken", "User"]).then((response) => {
            const _accessToken = response[0][1];
            const _user = response[1][1];
            //dispatch(setLogin({username: "alikvkli"}));
            //JSON.parse(_user)
        })
    }, [])



    return (
        <>
            <StatusBar
                backgroundColor="transparent"
                translucent={true} />
            <NavigationContainer theme={{
                dark: false,
                colors: {
                    background: "rgb(255, 255, 255)",
                    border: "rgb(224, 224, 224)",
                    card: "rgb(255, 255, 255)",
                    primary: "rgb(0, 122, 255)",
                    text: "rgb(28, 28, 30)",
                    notification: "rgb(255, 69, 58)",
                }
            }}>
                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false,
                        presentation: "modal",
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
                    }}>
                    <RootStack.Screen
                        name={"RootScreen"}
                        component={TabNavigator} />
                    <RootStack.Screen
                        name={"RootLoginScreen"}
                        component={AuthNavigator} />
                </RootStack.Navigator>
            </NavigationContainer>
            <LoadingLayout />
        </>
    )
}