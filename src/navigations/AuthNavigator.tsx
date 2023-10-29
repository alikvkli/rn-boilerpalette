import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "../screens/login/LoginScreen";
import { ScreenRouter } from "./router";

const RootStack = createStackNavigator();

export default function (){
    return (
        <RootStack.Navigator
        screenOptions={{
            headerShown: true,
            title:"",
            headerMode: "screen",
            headerShadowVisible: false,
            headerLeft: () => null,
        }}>
            <RootStack.Screen
                name={ScreenRouter.LoginScreen}
                component={LoginScreen}/>
        </RootStack.Navigator>
    )
}