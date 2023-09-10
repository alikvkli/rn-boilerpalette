import {StyleSheet, TouchableOpacity, View} from "react-native";
import NavigationName from "../NavigationName";
import {MaterialIcons} from "@expo/vector-icons";
import {Theme} from "../../theme";
import {useNavigation} from "@react-navigation/native";

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name="arrow-back" size={32} color={Theme.colors.primaryColorDark} />
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

export default  BackButton;