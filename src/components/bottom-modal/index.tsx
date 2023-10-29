import React, { FC, useMemo } from "react";
import "react-native-gesture-handler"
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View
} from "react-native";
import { TModal } from "./index.types";

const BottomNativeModal: FC<TModal> = (props) => {
    const { ref, onClose, snapPoint, children, title } = props;
    const { width } = useWindowDimensions();
    const snapPoints = useMemo(() => [...snapPoint], []);



    return (
        <BottomSheetModal
            index={0}
            snapPoints={snapPoints}
            style={{ borderRadius: 50 }}
            onDismiss={onClose}
            keyboardBehavior="fillParent"
            ref={ref as any}>
            <SafeAreaView style={styles.flex}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={[styles.contentSeperator, { width: width }]}>
                        {children}
                    </View>
                </View>
            </SafeAreaView>
        </BottomSheetModal>
    )

}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 15
    },
    title: {
        fontWeight: "900"
    },
    contentSeperator: {
        borderBottomColor: "gray",
        borderBottomWidth: 0.2,
        marginVertical: 16
    }
})

export default BottomNativeModal;