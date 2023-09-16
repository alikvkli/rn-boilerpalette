import DefaultLayout from "../../../layouts/DefaultLayout";
import {Animated, ScrollView, StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Theme} from "../../../theme";
import {useNavigation} from "@react-navigation/native";
import {Divider} from "../../../components/divider/Divider";
import FeedSlider from "./FeedSlider";
import {SectionHeader} from "../../../components/section/SectionHeader";
import {HtmlView} from "../../../components/htmlview/HtmlView";
import {HeaderButton, HeaderButtons, Item} from "react-navigation-header-buttons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {CommentModal} from "../../../modals/CommentModal";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";

const SectionContent: React.FC<{
    title: string;
    rightSide?: React.ReactNode;
    contentStyle?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}> = ({title, rightSide, children, contentStyle}) => (
    <View style={{paddingVertical: 8}}>
        <SectionHeader title={title} rightSide={rightSide}/>
        <View style={[styles.sectionChildrenContent, contentStyle]}>
            {children}
        </View>
    </View>
);

const CommentButton = (props:any) => (
    <HeaderButton
        {...props}
        IconComponent={MaterialCommunityIcons}
        iconSize={24}
    />
);

const FeedDetailScreen = () => {
    const [headerColor, setHeaderColor] = useState("white");
    const [isVisibleCommentModal, setIsVisibleCommentModal] = useState(false);
    const bottomSheetModalRef = useRef<any>(null);

    const animation = new Animated.Value(0);
    const navigation = useNavigation();
    const opacity = animation.interpolate({
        inputRange: [0, 1, 200],
        outputRange: [0, 0, 1],
        extrapolate: "clamp",
    });


    useEffect(() => {
        animation.addListener(({value}) => {
            if (value >= 51) {
                setHeaderColor(Theme.colors.primaryColorDark);
            } else {
                setHeaderColor("white");
            }
        });
        return () => {
            animation.removeAllListeners();
        };
    }, [animation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Escar yılın ilk yarısında 693..",
            headerTransparent: true,
            headerTintColor: headerColor || "white",
            headerTitleStyle: {opacity},
            headerBackground: () => (
                <Animated.View
                    style={[StyleSheet.absoluteFill, styles.headerView, {opacity}]}
                >
                    <Divider style={styles.headerDivider}/>
                </Animated.View>
            ),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CommentButton}>
                    <Item
                        title="share"
                        color={headerColor || "white"}
                        iconName="comment"
                        onPress={handlePresentCommentModal}
                    />
                </HeaderButtons>
            )
        });
    }, [opacity, headerColor]);

    const handlePresentCommentModal = () => {
        //@ts-ignore
        bottomSheetModalRef.current?.present();
        setIsVisibleCommentModal(true)
    }

    useEffect(() => {
        if(isVisibleCommentModal){
            navigation.setOptions({headerShown:false})
        }else{
            navigation.setOptions({headerShown:true})

        }
    },[isVisibleCommentModal])

    return (
        <BottomSheetModalProvider>
            <ScrollView
                style={styles.scrollView}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: animation}}}],
                    {useNativeDriver: false}
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollViewContainer, {backgroundColor: isVisibleCommentModal ? "gray": "white"}]}
            >
                <FeedSlider/>
                <Divider/>
                <SectionContent
                    title={"Escar yılın ilk yarısında 693 milyon TL'lik net satış ile büyümesini sürdürdü"}
                    contentStyle={{marginTop: -4}}
                >
                    <HtmlView
                        htmlContent={`
                    <p> Filo araç kiralama sektöründe 20 yılı aşkın tecrübesi ve güçlü finansal yapısıyla istikrarlı büyümesini sürdüren Escar, 2023 ikinci çeyreğinde, geçen yılın aynı dönemine göre satışlarında yüzde 168 ve FAVÖK'te yüzde 185 büyüme kaydederek etkileyici bir performans sergiledi.</p>
                    <p>2023 yılının 6 ayında 693 milyon TL'lik net satış gerçekleştiren Escar, aynı dönemde 397,2 milyon TL'lik net kara ulaştı. Aynı dönemde gelir ve FAVÖK büyümeleri sırasıyla yüzde 157 ve yüzde 181 olarak gerçekleşti. Bununla birlikte, brüt kar marjı yüzde 74'ten yüzde 79'a yükselirken, FAVÖK marjı yüzde 67 seviyesinden yüzde 73'e yükseldi.</p>
                    <p>Yenilikçi iş modeli, müşteri sadakati, halka arz başarısı ve çözüm odaklı hizmet anlayışı ile öne çıkan Escar, teknolojiye değer katan yatırımlar yaparak 2023'ün ikinci çeyreğinde de büyümeye devam etti. Escar, 2022 ve 2023 yıllarını karşılaştırıldığında etkileyici bir büyüme performansı sergiledi. 2022 yılında net karını yüzde 74,3 artırarak 726,2 milyon TL hasılat elde ederken, aynı dönemde Yıldız Pazar'da işlem görmeye devam etti. 2023 yılının ikinci çeyreğinde ise Escar, bir önceki yılın aynı dönemine göre satışlarda yüzde 168'lik ve FAVÖK'te yüzde 185'lik büyüme kaydetti. 2023'ün ilk 6 ayındaki gelir ve FAVÖK büyümeleri sırasıyla yüzde 157 ve yüzde 181 olarak gerçekleşti. Bununla birlikte Escar'ın brüt kar marjı yüzde 74'ten yüzde 79'a yükselirken, FAVÖK marjı yüzde 67 seviyesinden yüzde 73'e çıktı. 2023 yılının 6 ayında 693 milyon TL'lik net satış gerçekleştiren Escar, aynı dönemde 397,2 milyon TL'lik net kara ulaştı.</p>
                    <p>"2023'ün son çeyreğinde yeni yatırımlarla büyümeye devam edeceğiz"</p>
                    <p>Escar'ın 2023 verilerine ilişkin değerlendirmelerde bulunan Escar Genel Müdürü Nora Karakaş, "30 Haziran 2023 itibarıyla Escar olarak toplam araç sayımız, bir önceki yılın aynı dönemine göre yüzde 7,3 artışla 5 bin 10 adede yükselirken, piyasa değerimiz 28 Ağustos 2023 itibari ile 9 milyon 814 TL'ye ulaştı. Escar'ın bu dönemdeki güçlü büyüme performansı ve artan marjları, şirketin rekabetçiliğini ve finansal sağlamlığını vurguluyor. 2023 yılının son çeyreğinde de yeni yatırımlarla büyüme hedeflerimize devam edeceğiz" dedi.</p>
                    `}
                    />
                </SectionContent>

                <CommentModal onClose={() => setIsVisibleCommentModal(false)} ref={bottomSheetModalRef}/>

            </ScrollView>
        </BottomSheetModalProvider>
    );


}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        gap: 16,
        padding: 16
    },
    headerView: {backgroundColor: "white"},
    headerDivider: {position: "absolute", bottom: 0, left: 0, right: 0},
    scrollView: {flex: 1, backgroundColor: "white"},
    scrollViewContainer: {paddingBottom: 24},
    sectionChildrenContent: {
        paddingHorizontal: 16,
        paddingTop: 4,
        paddingBottom: 8,
    },
});


export default FeedDetailScreen;