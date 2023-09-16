import {TouchableOpacity, View, StyleSheet, Image, Text} from "react-native";
import PagerView from "react-native-pager-view";
import {LinearGradient} from "expo-linear-gradient";
import {Theme} from "../../../theme";
import {Pagination} from "react-native-snap-carousel-v4";
import {useState} from "react";
import {BookMarkButton} from "../../../components/buttons/BookMarkButton";
import {MaterialIcons} from "@expo/vector-icons";
const FeedSlider = () => {
    const [indicatorIndex, setIndicatorIndex] = useState(0);

    const images = ["https://i.bigpara.com/i/55big/16102015_bist_564654.jpg","https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1480000/borsa-istanbul-1480093.jpg"]

    return (
        <View>
            <PagerView
                style={styles.viewPager}
                initialPage={0}
                onPageSelected={(e) => setIndicatorIndex(e.nativeEvent.position)}
            >
                {images.map((item, index) => (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        key={`pagerItemKey${index}`}>
                        <Image
                            source={{
                                uri: item,
                            }}
                            style={styles.flex1}
                        />
                    </TouchableOpacity>
                ))}
            </PagerView>
            <LinearGradient
                colors={["transparent", "black"]}
                style={styles.gradient}
                pointerEvents="none"
            >
                <View style={styles.labelContent}>
                    <Text style={styles.labelText}>
                       Halka Arz
                    </Text>
                </View>
                <Text style={styles.titleText}>Escar yılın ilk yarısında 693 milyon TL'lik net satış ile büyümesini sürdürdü</Text>
                <View style={{display: "flex", flexDirection: "row", marginTop:8,gap:8,justifyContent:"space-between",alignItems: "center"}}>
                    <View style={{display: "flex", flexDirection: "row",gap:4,justifyContent:"flex-start",alignItems: "center"}}>
                        <MaterialIcons name="date-range" size={16} color="white" />
                        <Text style={styles.locationText}>
                            14.09.2023 14:00
                        </Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row",gap:4,justifyContent:"flex-start",alignItems: "center"}}>
                        <MaterialIcons name="comment" size={16} color="white" />
                        <Text style={styles.locationText}>
                            4
                        </Text>
                    </View>
                </View>

            </LinearGradient>
            <View style={{position: "absolute", bottom: 16, alignSelf: "center"}}>
                <Pagination
                    activeDotIndex={indicatorIndex}
                    dotsLength={images.length}
                    dotColor={Theme.colors.primaryColor}
                    inactiveDotColor={Theme.colors.lightgray}
                    inactiveDotScale={0.8}
                    inactiveDotOpacity={0.8}
                    containerStyle={{paddingVertical: 0}}
                    dotStyle={{
                        marginHorizontal: -20,
                    }}
                />
            </View>
            <BookMarkButton isMarked={true} style={styles.likeIcon} onClick={() => {}}/>
        </View>
    );
}
const styles = StyleSheet.create({
    flex1: { flex: 1 },
    viewPager: { height: 340 },
    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
    labelContent: {
        backgroundColor: Theme.colors.blueDark,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: "flex-start",
    },
    labelText: {
        color: "white",
        fontFamily: "default-medium",
        fontSize: 10,
    },
    titleText: {
        marginTop: 8,
        color: "white",
        fontSize: 22,
        fontFamily: "default-bold",
        textAlign: "justify",
    },
    locationText: {
        color: "white",
        fontSize: 13,
        textAlign: "justify",
    },
    likeIcon: {
        position: "absolute",
        bottom: -18,
        right: 16,
        zIndex: 100,
    },
});

export  default FeedSlider;