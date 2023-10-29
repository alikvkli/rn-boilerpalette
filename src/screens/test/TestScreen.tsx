import { Text, View } from "react-native";
import DefaultLayout from "../../layouts/DefaultLayout";
import CustomIcon from "../../components/custom-icon";

export default function TestScreen() {
    return (
        <DefaultLayout refreshable={true} onRefresh={() => { }}>
            <View style={{ flex: 1, marginTop:20,display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center",gap:16 }}>
                <CustomIcon as="FontAwesome" size={18} name="hand-o-right" />
                <Text>Test.</Text>
            </View>
        </DefaultLayout>
    )
}
