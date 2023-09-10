import {createStackNavigator} from "@react-navigation/stack";
import NavigationName from "./NavigationName";
import LoginScreen from "../screens/login/LoginScreen";

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
                name={NavigationName.LoginScreen}
                component={LoginScreen}/>
        </RootStack.Navigator>
    )
}