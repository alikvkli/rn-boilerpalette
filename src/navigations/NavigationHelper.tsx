import {FC} from "react";
import {ParamListBase, RouteProp, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import NavigationName from "./NavigationName";
import {Theme} from "../theme";
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {StackNavigationOptions} from "@react-navigation/stack";
import {Feather} from '@expo/vector-icons';


const getTabTitle = (routeName: string): string => {
    if (routeName === NavigationName.HomeTab) {
        return "Anasayfa";
    } else if (routeName === NavigationName.BookMarkTab) {
        return "Favorilerim";
    } else if (routeName === NavigationName.CategoryTab) {
        return "Kategoriler";
    } else if (routeName === NavigationName.MenuTab) {
        return "Ayarlar";
    }
    return "";
};

export const tabScreenOptions: (props: {
    route: RouteProp<ParamListBase, keyof ParamListBase>;
    navigation: any;
}) => BottomTabNavigationOptions = ({route}) => ({
    title: getTabTitle(route.name),
    tabBarIcon: ({focused, color, size}) => {
        switch (route.name) {
            case NavigationName.HomeTab:
                return <AntDesign name="home" size={28} color={color}/>;
            case NavigationName.BookMarkTab:
                return <Ionicons name="ios-bookmarks" size={24} color={color}/>;
            case NavigationName.CategoryTab:
                return <Feather name="award" size={24} color={color}/>;
            case NavigationName.MenuTab:
                return <Ionicons name="settings-sharp" size={24} color={color}/>;

        }
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
    //headerLeft: () => <MenuButton/>
}

