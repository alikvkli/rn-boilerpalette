import {StyleSheet, TouchableOpacity, View} from "react-native";
import NavigationName from "../NavigationName";
import {MaterialIcons} from "@expo/vector-icons";
import {Theme} from "../../theme";
import {useNavigation} from "@react-navigation/native";

const MenuButton = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationName.MenuScreen)}>
                <MaterialIcons name="menu" size={32} color={Theme.colors.primaryColorDark} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rightContainer:{
        display:"flex",
        flexDirection:"row",
        gap:4,
        paddingStart:8
    }
})

export default  MenuButton