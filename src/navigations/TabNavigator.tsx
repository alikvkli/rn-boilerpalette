import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { stackScreenOptions, tabScreenOptions } from "./NavigationHelper";
import HomeScreen from "../screens/home/HomeScreen";
import { useAppSelector } from "../hooks";
import { ScreenRouter } from "./router";
import TestScreen from "../screens/test/TestScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Ana ekran Routes
const HomeTabStack = () => {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen
                name={ScreenRouter.HomeScreen}
                component={HomeScreen}
                options={{ headerShown: true, title: "" }} />
        </Stack.Navigator>
    )
}

const TestTabStack = () => {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen
                name={ScreenRouter.TestScreen}
                component={TestScreen}
                options={{ headerShown: true, title: "" }} />
        </Stack.Navigator>
    )
}





const TabNavigator = () => {
    const { login } = useAppSelector(state => state.user)
    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen
                name="HomeTab"
                component={HomeTabStack} />
            <Tab.Screen
                name="TestTab"
                component={TestTabStack} />
            {/* <Tab.Screen
                name={NavigationName.BookMarkTab}
                component={BookMarkTabStack}
                listeners={({navigation, route}) => ({
                    tabPress: (e) => {
                        if (login) {
                            return;
                        }
                        e.preventDefault();
                        navigation.navigate(NavigationName.RootLoginScreen);
                    },
                })}
            /> */}
        </Tab.Navigator>
    )
}

export default TabNavigator
