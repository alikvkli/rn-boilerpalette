import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {stackScreenOptions, tabScreenOptions} from "./NavigationHelper";
import NavigationName from "./NavigationName";
import HomeScreen from "../screens/home/HomeScreen";
import BookMarkScreen from "../screens/bookmark/BookMarkScreen";
import {useAppSelector} from "../hooks";
import CategoryScreen from "../screens/category/CategoryScreen";
import MenuScreen from "../screens/menu/MenuScreen";
import BackButton from "./components/BackButton";
import CategoryFeedScreen from "../screens/category/CategoryFeedScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Ana ekran Routes
const HomeTabStack = () => {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen
                name={NavigationName.HomeScreen}
                component={HomeScreen}
                options={{headerShown: true, title: ""}}/>
        </Stack.Navigator>
    )
}

//Kaydedilenler Routes
const BookMarkTabStack = () => {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen
                name={NavigationName.BookMarkScreen}
                component={BookMarkScreen}
                options={{headerShown: true, title: "Favorilerim"}}/>
        </Stack.Navigator>
    )
}

//Kategoriler Routes
const CategoryTabStack = () => {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen
                name={NavigationName.CategoryScreen}
                component={CategoryScreen}
                options={{headerShown: true, title: "Kategoriler"}}
            />
            <Stack.Screen
                name={NavigationName.CategoryFeedScreen}
                component={CategoryFeedScreen}
                options={{headerShown:true}}/>
        </Stack.Navigator>
    )
}

//Ayarlar Routes

const MenuTabStack = () => {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
            <Stack.Screen
                name={NavigationName.MenuScreen}
                component={MenuScreen}
                options={{headerShown: true, title:"Ayarlar"}}/>
        </Stack.Navigator>
    )
}


const TabNavigator = () => {
    const {login} = useAppSelector(state => state.user)
    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen
                name={NavigationName.HomeTab}
                component={HomeTabStack}/>
            <Tab.Screen
                name={NavigationName.CategoryTab}
                component={CategoryTabStack}/>
            <Tab.Screen
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
            />
            <Tab.Screen
                name={NavigationName.MenuTab}
                component={MenuTabStack}/>
        </Tab.Navigator>
    )
}

export default TabNavigator
