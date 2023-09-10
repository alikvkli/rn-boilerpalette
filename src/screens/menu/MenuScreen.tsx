import {FlatList, Text, TouchableHighlight, View, StyleSheet} from "react-native";
import {Theme} from "../../theme";
import {Ionicons} from "@expo/vector-icons";
import {Divider} from "../../components/divider/Divider";
import {useState} from "react";
import {PrivacyPolicyModal} from "../../modals/PrivacyPolicyModal";
import {AboutUsModal} from "../../modals/AboutUsModal";

const menuItems = [
    {
        title: "Hakkımızda",
        iconName: "business-outline",
        actionName: "aboutUs"
    },
    {
        title: "Gizlilik Politikası",
        iconName: "finger-print-outline",
        actionName: "privacyPolicy"
    }
]
export default function MenuScreen() {
    const [isVisiblePrivacyPolicyModal, setIsVisiblePrivacyPolicyModal] = useState(false);
    const [isVisibleAboutUsModal, setIsVisibleAboutUsModal] = useState(false);

    const onPressMenuItemClick = (item: any) => {
       if (item.actionName === "privacyPolicy") {
            setIsVisiblePrivacyPolicyModal(true);
        }else if(item.actionName === "aboutUs"){
           setIsVisibleAboutUsModal(true)
       }
    };

    return (
        <>
            <FlatList
                data={menuItems}
                keyExtractor={(item, index) => `key${index}ForMenu`}
                renderItem={({item}) => (
                    <TouchableHighlight
                        activeOpacity={0.8}
                        underlayColor="#DDDDDD"
                        onPress={() => onPressMenuItemClick(item)}>
                        <View style={styles.itemContainer}>
                            <View style={styles.iconContainer}>
                                <Ionicons
                                    name={item.iconName as never}
                                    size={24}
                                    color={Theme.colors.gray}
                                    style={styles.icon}
                                />
                            </View>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Ionicons
                                name="chevron-forward-outline"
                                size={24}
                                color={Theme.colors.gray}
                                style={{
                                    transform: [{scaleX: 1}],
                                }}
                            />
                        </View>
                    </TouchableHighlight>
                )}
                ItemSeparatorComponent={() => <Divider/>}
            />
            <PrivacyPolicyModal isVisible={isVisiblePrivacyPolicyModal} onDismissModal={() => setIsVisiblePrivacyPolicyModal(false)}/>
            <AboutUsModal isVisible={isVisibleAboutUsModal} onDismissModal={() => setIsVisibleAboutUsModal(false)}/>
        </>
    )
}


const styles = StyleSheet.create({
    container: {flex: 1},
    flex1: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: "row",
        paddingVertical: 18,
        paddingEnd: 18,
        paddingStart: 0,
    },
    iconContainer: {
        width: 60,
        alignSelf: "center",
    },
    icon: {alignSelf: "center"},
    titleText: {
        flex: 1,
        alignSelf: "center",
        color: Theme.colors.black,
        fontSize: 17,
        textAlign: "justify",
    },
});