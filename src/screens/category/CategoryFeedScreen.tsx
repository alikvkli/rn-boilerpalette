import {StyleSheet, TouchableOpacity, View} from "react-native";
import DefaultLayout from "../../layouts/DefaultLayout";
import CategoryItem from "../../components/listing/category-list-item/category-item";
import {FC, useLayoutEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {AntDesign,MaterialCommunityIcons} from "@expo/vector-icons";
import {Theme} from "../../theme";
import NewsItem from "../../components/listing/news-list-item/news-item";
import {SectionHeader} from "../../components/section/SectionHeader";


const FollowButton = () => {
    return (
        <TouchableOpacity style={styles.headerRight} onPress={() => {}}>
            <MaterialCommunityIcons name="access-point-plus" size={24} color={Theme.colors.primaryColorDark} />
            {/*<MaterialCommunityIcons name="access-point-check" size={24} color={Theme.colors.primaryColorDark} />
            <MaterialCommunityIcons name="access-point-minus" size={24} color={Theme.colors.primaryColorDark} />*/}
        </TouchableOpacity>
    )
}


const CategoryFeedScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "#EBEBK",
            headerRight: () => <FollowButton/>
        })
    },[])

    return (
        <DefaultLayout>
            <View style={styles.container}>
                <SectionHeader mTop={12} title="Feed"/>

                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </View>
        </DefaultLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        gap: 16,
    },
    headerRight:{
        paddingRight:16
    }
})
export default CategoryFeedScreen;

