import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { ReactNativeModal } from "react-native-modal";
import {Text} from "../text/Text";
import {Theme} from "../../theme";

type TProps = {
    isVisible: boolean;
    onDismissModal: () => void;
    title?: string;
    children: React.ReactNode;
};


export const BottomModal: React.FC<TProps> = (props) => {
    return (
        <ReactNativeModal
            isVisible={props.isVisible}
            swipeDirection="down"
            style={styles.modal}
            onSwipeComplete={props.onDismissModal}
            onBackdropPress={props.onDismissModal}
            onBackButtonPress={props.onDismissModal}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.modalContainer}>
                    {props.title && (
                        <View style={styles.titleRow}>
                            <Text style={styles.titleText}>
                                {props.title}
                            </Text>
                        </View>
                    )}
                    {props.children}
                </View>
            </SafeAreaView>
        </ReactNativeModal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    safeAreaContainer: {
        backgroundColor: "white",
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        minHeight: 300,
    },
    modalContainer: {
        padding: 24,
    },
    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: Theme.sizes.separatorSize
    },
    titleText: {
        flex: 1,
        fontFamily: "default-medium",
        fontSize: 15,
        color: Theme.colors.black,
    }
});