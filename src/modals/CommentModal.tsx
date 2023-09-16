import "react-native-gesture-handler"
import React, {FC, useCallback, useMemo} from "react";
import {
    BottomSheetFooter,
    BottomSheetModal,
    BottomSheetModalProvider, BottomSheetScrollView, BottomSheetTextInput, BottomSheetVirtualizedList
} from "@gorhom/bottom-sheet";
import {
    Animated, FlatList, Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableHighlight, TouchableOpacity,
    useWindowDimensions,
    View
} from "react-native";
import {Theme} from "../theme";
import CommentItem from "../components/listing/comment-list-item/comment-item";


interface ICommentModal {
    onClose: () => void;
    ref: any;
}

export const CommentModal: FC<ICommentModal> = React.forwardRef(({onClose}, ref) => {
    const {width} = useWindowDimensions();
    const snapPoints = useMemo(() => ['75%', '100%'], []);

    const data = [
        {
            id: 1,
            username: "ali kavaklı",
            userAvatar: "https://pbs.twimg.com/profile_images/1524468526941188098/_S28Fet6_400x400.jpg",
            text: "Borsa hareketleri hakkında ne düşünüyorsunuz?",
            nestedComments: [
                {
                    id: 2,
                    username: "eminoz",
                    userAvatar: "https://avatars.githubusercontent.com/u/60894881?v=4",
                    text: "Borsa endeksi yüksek bir seviyede seyrediyor gibi görünüyor.",
                },
                {
                    id: 3,
                    username: "eminoz",
                    userAvatar: "https://avatars.githubusercontent.com/u/60894881?v=4",
                    text: "YBir düzeltme hareketi olabilir mi?",
                },
                {
                    id: 3,
                    username: "eminoz",
                    userAvatar: "https://avatars.githubusercontent.com/u/60894881?v=4",
                    text: "Borsa endeksi yüksek bir seviyede seyrediyor gibi görünüyor.",
                },
            ],
        },
        {
            id: 4,
            username: "eminoz",
            userAvatar: "https://avatars.githubusercontent.com/u/60894881?v=4",
            text: "Bugünkü borsa haberleri çok ilginç!",
            nestedComments: [],
        }];

    const renderFooter = useCallback(
        (props: any) => (
            <BottomSheetFooter {...props} style={{
                backgroundColor: "white",
                padding: 12,
                marginHorizontal: 12,
                borderTopWidth: 0.4,
                borderTopColor: "gray"
            }} bottomInset={0}>
                <View style={{flex: 1, flexDirection: "column", gap: 4}}>
                    <BottomSheetTextInput placeholder="Yorum giriniz..." style={styles.input}/>
                </View>
                <TouchableOpacity style={styles.footerContainer}>
                    <Text style={styles.footerText}>Yorum Yap</Text>
                </TouchableOpacity>
            </BottomSheetFooter>
        ),
        []
    );

    return (

        <BottomSheetModal
            index={0}
            snapPoints={snapPoints}
            style={{borderRadius: 50}}
            onDismiss={onClose}
            keyboardBehavior="fillParent"
            footerComponent={renderFooter}
            ref={ref as any}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Yorumlar(3)</Text>
                    <View
                        style={{width: width, borderBottomColor: "gray", borderBottomWidth: 0.2, marginVertical: 16}}/>
                    <FlatList
                        style={{marginBottom: 150}}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <View style={styles.commentContainer}>
                                <CommentItem comment={item}/>
                            </View>
                        )}
                    />
                </View>
            </SafeAreaView>
        </BottomSheetModal>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 15
    },
    title: {
        fontWeight: "900"
    },
    footerContainer: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: Theme.colors.primaryColor,
    },
    footerText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '800',
    },
    input: {
        marginTop: 8,
        marginBottom: 10,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: 20,
        padding: 8,
        height: 50,
        backgroundColor: 'rgba(151, 151, 151, 0.25)',
    },
    commentContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
})

