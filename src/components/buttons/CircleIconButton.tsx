import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
    StyleProp,
} from "react-native";
import {Box} from "../box/Box";
import { Theme } from "../../theme";

type TProps = {
    iconName: string;
    iconColor: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
    iconSize?: number;
    iconStyle?: StyleProp<ViewStyle>;
    onPress?: () => void;
};

export const CircleIconButton: React.FC<TProps> = (props) => {
    return (
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <Box
                style={[
                    styles.box,
                    props.size !== undefined && {
                        width: props.size,
                        height: props.size,
                        borderRadius: props.size,
                    },
                ]}
            >
                <Ionicons
                    name={props.iconName as any}
                    size={props.iconSize ?? 23}
                    color={props.iconColor}
                    style={[styles.icon, props.iconStyle]}
                />
            </Box>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 38,
        height: 38,
        borderRadius: 38,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderStyle:"solid",
        borderWidth:0.5,
        borderColor:Theme.colors.lightgray
    },
    icon: { marginTop: 0 },
});
