import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import DefaultLayout from "../../layouts/DefaultLayout";
import {Box} from "../../components/box/Box";
import {Theme} from "../../theme";
import CategoryItem from "../../components/listing/category-list-item/category-item";


const CategoryScreen = () => {
    return (
        <DefaultLayout>
            <View style={styles.container}>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
            </View>
        </DefaultLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex:1,
        gap: 16,
        padding: 16
    },
})
export default CategoryScreen;

