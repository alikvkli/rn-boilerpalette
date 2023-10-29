import { ParamListBase, RouteProp } from "@react-navigation/native";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { TabRouter } from "./router";
import { Theme } from "../theme";
import { StackNavigationOptions } from "@react-navigation/stack";
import CustomIcon from "../components/custom-icon";


const getTabTitle = (routeName: string): string => {
    return TabRouter[routeName].title;
};

export const tabScreenOptions: (props: {
    route: RouteProp<ParamListBase, keyof ParamListBase>; navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => ({
    title: getTabTitle(route.name),
    tabBarIcon: ({ focused, color }) => {
        const icon = TabRouter[route.name].icon
        return <CustomIcon as={icon.as} name={icon.name} size={icon.size} color={color} focused={focused} />
    },
    tabBarActiveTintColor: Theme.colors.navbarActiveColor,
    tabBarInactiveTintColor: Theme.colors.navbarInactiveColor,
    headerShown: false,
});

export const stackScreenOptions: StackNavigationOptions = {
    headerTitleAlign: "center",
    headerBackTitleVisible: false,
    headerTintColor: Theme.colors.primaryColorDark,
    headerMode: "screen",
}

