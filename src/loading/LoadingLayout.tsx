import React from "react";
import {View,ActivityIndicator, StyleSheet} from "react-native";
import {Theme} from "../theme";
import {useAppSelector} from "../hooks";

const LoadingLayout = () => {
    const {isLoading} = useAppSelector(state => state.config);
    return (
        isLoading && (
            <View style={[StyleSheet.absoluteFill, styles.container]}>
                <ActivityIndicator size="large" color={Theme.colors.primaryColor}  />
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00000010",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
    },
})

export default  LoadingLayout;