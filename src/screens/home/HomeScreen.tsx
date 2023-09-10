import {Animated, Dimensions, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Theme} from "../../theme";
import {homeSlider} from "../../data";
import {Carousel} from "react-native-snap-carousel-v4";
import {HomeSliderItemView} from "./HomeSliderItemView";
import {SectionHeader} from "../../components/section/SectionHeader";
import NewsItem from "../../components/listing/news-list-item/news-item";
import DefaultLayout from "../../layouts/DefaultLayout";

const WINDOW_WIDTH = Dimensions.get("window").width;

export default function HomeScreen() {
    return (

        <DefaultLayout>
            <SectionHeader mTop={12} title="Öne Çıkarılanlar"/>
            <Carousel
                layout={"stack"}
                data={homeSlider}
                renderItem={({item}) => (
                    <HomeSliderItemView
                        item={item}
                        onClick={() => console.log(item)}
                    />
                )}
                sliderWidth={WINDOW_WIDTH}
                itemWidth={WINDOW_WIDTH - 32}
                vertical={false}
            />

            <SectionHeader mTop={12} title="Borsa da bugün ne oldu?"/>
            <View style={[styles.flex1, {gap: 16}]}>
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
    flex1: {flex: 1},
})