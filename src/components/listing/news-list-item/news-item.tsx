import {StyleSheet, TouchableOpacity, View, Image, NativeSyntheticEvent} from "react-native";
import {Box} from "../../box/Box";
import {Theme} from "../../../theme";
import {Text} from "../../text/Text";
import {BookMarkButton} from "../../buttons/BookMarkButton";
import PagerView from 'react-native-pager-view';
import {Pagination} from "react-native-snap-carousel-v4";
import {useState} from "react";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {Divider} from "../../divider/Divider";


const SLIDER_HEIGHT = 180;
const NewsItem = () => {
    const [indicatorIndex, setIndicatorIndex] = useState(0);

    const onPageSelected = (event: NativeSyntheticEvent<any>) => {
        setIndicatorIndex(event.nativeEvent.position);
    };

    return (
        <Box style={styles.container}>
            <View style={styles.labelContent}>
                <Text style={styles.labelText}>Test</Text>
                <Text style={styles.labelText}>Test2</Text>
            </View>
            <BookMarkButton isMarked={true} style={styles.likeIcon} onClick={ () => {}}/>
            <View>
                <View style={{overflow:"hidden"}}>
                    <PagerView
                        style={styles.viewPager}
                        initialPage={0}
                        onPageSelected={onPageSelected}
                    >
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {}}
                            key={`pageItemKey1`}
                        >
                            <Image
                                key={1}
                                source={{
                                    uri: "https://i.bigpara.com/i/55big/16102015_bist_564654.jpg",
                                }}
                                style={styles.viewPagerItemImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {}}
                            key={`pageItemKey2`}
                        >
                            <Image
                                key={2}
                                source={{
                                    uri: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1480000/borsa-istanbul-1480093.jpg",
                                }}
                                style={styles.viewPagerItemImage}
                            />
                        </TouchableOpacity>
                    </PagerView>
                </View>
                <Pagination
                    dotsLength={2}
                    activeDotIndex={indicatorIndex}
                    dotColor="white"
                    inactiveDotColor={Theme.colors.lightgray}
                    inactiveDotScale={0.8}
                    containerStyle={styles.paginationContainer}
                    dotStyle={styles.paginationDot}
                />
            </View>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.ph16}>
                    <View style={styles.mv14}>
                        <Text style={styles.priceText}>
                            idk
                        </Text>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row" }}>
                                <AntDesign name="isv" size={12} />
                                <Text style={styles.locationText}>test1</Text>
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={{ flexDirection: "row" }}>
                                <Entypo name="location-pin" size={14} />
                                <Text style={styles.locationText}>text2</Text>
                            </View>
                        </View>
                    </View>
                    <Divider />
                    <View style={styles.propertiesContainer}>
                        <Text>test</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Box>
    )
}
const styles = StyleSheet.create({
    container: { marginHorizontal: 16 },
    viewPager: { height: SLIDER_HEIGHT , overflow: "hidden" },
    viewPagerItemImage: {
        flex: 1,
        borderTopLeftRadius: Theme.sizes.boxBorderRadius,
        borderTopRightRadius: Theme.sizes.boxBorderRadius,
    },
    paginationContainer: {
        position: "absolute",
        margin: 0,
        minHeight: 0,
        paddingVertical: 0,
        bottom: 14,
        alignSelf: "center",
    },
    paginationDot: { marginHorizontal: -20 },
    labelContent: {
        position: "absolute",
        left: 16,
        top: 16,
        zIndex: 10,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:8
    },
    labelText: {
        backgroundColor: Theme.colors.blueDark,
        color: "white",
        fontFamily: "default-medium",
        fontSize: 11,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        overflow:"hidden"
    },
    likeIcon: {
        position: "absolute",
        top: SLIDER_HEIGHT - 18,
        right: 16,
        zIndex: 5,
    },
    ph16: { paddingHorizontal: 16 },
    mv14: { paddingVertical: 14 },
    priceText: {
        fontFamily: "default-medium",
        fontSize: 18,
        color: Theme.colors.textColor,
        textAlign: "justify",
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6,
        opacity: 0.4,
    },
    locationText: {
        color: "black",
        fontSize: 13,
        fontFamily: "default-medium",
        marginLeft:4
    },
    propertiesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 4,
        paddingVertical: 14,
        alignItems: "center",
        alignContent: "center",
    },
    propertyContent: { flexDirection: "row" },
    propertyTitle: {
        marginStart: 12,
        fontSize: 13,
        marginTop: 1,
        color: Theme.colors.blueDark,
        fontFamily: "default-medium",
    },
});

export default  NewsItem;