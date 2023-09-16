import {Animated, RefreshControl, SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {Theme} from "../theme";
import {FC} from "react";

interface IDefaultLayout {
    children: React.ReactNode,
    refreshable?: boolean,
    onRefresh?: () => void
}

const DefaultLayout: FC<IDefaultLayout> = ({children, refreshable, onRefresh,}) => {
    const offset = new Animated.Value(0);
    const renderRefreshControl = () => {
        if (refreshable) {
            return (
                <RefreshControl
                    onRefresh={onRefresh}
                    refreshing={false}
                />
            );
        } else {
            return undefined;
        }
    };

    return (
        <SafeAreaView style={styles.contentContainer}>
            <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                refreshControl={renderRefreshControl()}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: offset}}},
                ], {useNativeDriver: false})}
                style={styles.scrollViewContainer}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {flex: 1},
    flex1: {flex: 1},
    contentContainer: {flex: 1},
    scrollViewContainer: {
        flex: 1,
        backgroundColor: Theme.colors.windowBackground
    },
});

export default DefaultLayout;