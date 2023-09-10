import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Box} from "../../box/Box";
import {Theme} from "../../../theme";
import {MaterialIcons,SimpleLineIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import NavigationName from "../../../navigations/NavigationName";

const CategoryItem = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(NavigationName.CategoryFeedScreen)}>
            <Box style={[styles.container, {backgroundColor: Theme.colors.primaryColorDark}]}>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryText}>
                        #EBEBK
                    </Text>
                    <View style={styles.featureContainer}>
                        <MaterialIcons name="article" size={18} color="white"/>
                        <Text style={styles.categoryText}>
                            16 içerik
                        </Text>
                    </View>
                    <View style={styles.featureContainer}>
                        <MaterialIcons name="supervised-user-circle" size={18} color="white" />
                        <Text style={styles.categoryText}>
                            8 takipçi
                        </Text>
                    </View>
                </View>
            </Box>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {marginVertical: 8},
    categoryContainer: {
        width: 120,
        height: 120,
        display: "flex",
        padding: 16,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },
    categoryText: {
        color: "white",
        fontSize: 14,
        fontFamily: "default-bold",
        textAlign: "center",
    },
    featureContainer:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:6
    }
});

export default CategoryItem;