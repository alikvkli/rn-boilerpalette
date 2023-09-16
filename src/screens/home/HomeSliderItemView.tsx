import {Entypo, MaterialCommunityIcons, FontAwesome5, MaterialIcons, AntDesign} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import {Theme} from "../../theme";
import {Text} from "../../components/text/Text";
import {Box} from "../../components/box/Box";

type TProps = {
    item: {
        title: string,
        imgUrl: string
    };
    onClick: () => void;
};

export const HomeSliderItemView: React.FC<TProps> = ({item, onClick}) => {
    return (
        <TouchableOpacity onPress={onClick} activeOpacity={1}>
            <Box style={styles.container}>
                <ImageBackground
                    style={styles.imgBack}
                    imageStyle={{borderRadius: Theme.sizes.boxBorderRadius}}
                    source={{
                        uri: "https://icdn.turkiyegazetesi.com.tr/images/23-08/27/ebebek-halka-arz-hangi-bankalarda-var_-bebek-giyim-devi-arz-olacak-ebebek-kac-lot-verir_.jpg",
                    }}
                >
                    <View style={styles.labelContent}>
                        <Text style={styles.labelText}>
                            Öne Çıkarılan
                        </Text>
                    </View>
                    <View style={styles.rowsContainer}>
                        <LinearGradient
                            colors={["transparent", "#000"]}
                            style={styles.gradientLayout}
                        >
                            <View style={styles.flex1}>
                                <Text style={styles.titleText} numberOfLines={3}>
                                    Ebebek halka arzına 3,9 milyonu aşkın yatırımcı geldi!
                                </Text>
                                {/* <View style={styles.featureContainer}>                               */}
                                {/*     <View style={styles.featureItem}>                                */}
                                {/*         <MaterialIcons name="date-range"  color="white" size={14} /> */}
                                {/*         <Text style={styles.featureText}>10.09.2023</Text>           */}
                                {/*     </View>                                                          */}
                                {/*     <View style={styles.featureItem}>                                */}
                                {/*         <AntDesign name="eye" color="white" size={14} />             */}
                                {/*         <Text style={styles.featureText}>24</Text>                   */}
                                {/*     </View>                                                          */}
                                {/* </View>                                                              */}
                            </View>
                        </LinearGradient>
                    </View>
                </ImageBackground>
            </Box>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {marginVertical: 8},
    imgBack: {
        flex: 1,
        height: 200,
    },
    flex1: {flex: 1},
    labelContent: {
        backgroundColor: Theme.colors.blueDark,
        position: "absolute",
        paddingHorizontal: 8,
        paddingVertical: 4,
        left: 16,
        top: 16,
        borderRadius: 4,
    },
    labelText: {
        color: "white",
        fontFamily: "default-medium",
        fontSize: 12,
    },
    rowsContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    gradientLayout: {
        flex:1,
        padding: 16,
        borderRadius: 6,
        flexDirection: "row",
    },
    titleText: {
        color: "white",
        fontSize: 18,
        fontFamily: "default-bold",
        textAlign: "justify",
        flex:1
    },
    featureContainer: {
        display:"flex",
        flexDirection:"row",
        marginTop: 6,
        gap:8,
        alignItems:"center",
    },
    featureItem:{
        display:"flex",
        flexDirection:"row",
        gap:4,
        alignItems:"center",
    },
    featureText: {
        color:"white",
        fontSize: 14,
        textAlign: "justify",
    },
    moneyText: {
        color: "white",
        fontSize: 22,
        fontFamily: "default-medium",
        alignSelf: "flex-end",
    },
});
