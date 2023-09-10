import {Text} from "react-native";
import {useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {HeaderButton, HeaderButtons, Item} from "react-navigation-header-buttons";
import {Theme} from "../../theme";
import {Ionicons} from "@expo/vector-icons";

const CloseButton = (props:any) => (
    <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={32}
    />
);
export default function LoginScreen(){
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CloseButton }>
                    <Item
                        title="share"
                        color={Theme.colors.primaryColor}
                        iconName="md-close"
                        onPress={() => navigation.goBack()}
                    />
                </HeaderButtons>
            ),
        })
    },[])

    return (
        <Text>login screen</Text>
    )
}