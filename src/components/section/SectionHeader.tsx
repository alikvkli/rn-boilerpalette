import React from "react";
import { View, StyleSheet } from "react-native";

import { Theme } from "../../theme";
import {Text} from "../text/Text";

type TProps = {
    title: string;
    mTop?: number | undefined;
    rightSide?:React.ReactNode
};

export const SectionHeader: React.FC<TProps> = ({ title, mTop,rightSide }) => {
    return (
        <View style={[styles.container, mTop !== undefined && { marginTop: mTop }]}>
            <Text style={styles.titleText}>{title}</Text>
            {rightSide}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    titleText: {
        fontFamily: "default-medium",
        fontSize: 18,
    },
});
