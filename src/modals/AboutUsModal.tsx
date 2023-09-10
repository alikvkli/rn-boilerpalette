import React, {FC, useEffect} from "react";
import {ScrollView} from "react-native";
import {BottomModal} from "../components/modal/BottomModal";
import {HtmlView} from "../components/htmlview/HtmlView";


type TProps = {
    isVisible: boolean;
    onDismissModal: () => void;
};

export const AboutUsModal: FC<TProps> = ({isVisible, onDismissModal}) => {
    const [privacyPolicy, setPrivacyPolicy] = React.useState<string>("");

    useEffect(() => {
        setPrivacyPolicy(`
            <h1>Hakkımızda</h1>
<p style="font-size: 1.2rem">
  Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. 
</p>
<p style="color: purple; margin-top: 10px">
  Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum.
</p>
<p>end</p>
`
        )
    }, [])

    return (
        <BottomModal isVisible={isVisible} onDismissModal={onDismissModal}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{padding: 16}}>
                <HtmlView htmlContent={privacyPolicy}/>
            </ScrollView>
        </BottomModal>
    )

}