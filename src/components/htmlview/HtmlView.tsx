import React from "react";
import {StyleSheet, Dimensions, useWindowDimensions} from "react-native";
import HTML from "react-native-render-html";

import { Theme } from "../../theme";

type TProps = {
    htmlContent: string;
};

export const HtmlView: React.FC<TProps> = (props) => {
    const {width: contentWidth} = useWindowDimensions();

    return (
        <HTML
            contentWidth={contentWidth}
            baseStyle={styles.htmlBaseFontStyle}
            source={{html: props.htmlContent}}
            enableExperimentalMarginCollapsing={true}
            ignoredStyles={["fontFamily"]}
            tagsStyles={{
                p: { marginVertical: 8 },
                h1: {
                    marginTop: 12,
                    marginBottom: 2,
                    fontSize: 24,
                    fontFamily: "default-medium",
                },
                h2: {
                    marginTop: 12,
                    marginBottom: 2,
                    fontSize: 22,
                    fontFamily: "default-medium",
                },
                h3: {
                    marginTop: 12,
                    marginBottom: 2,
                    fontSize: 20,
                    fontFamily: "default-medium",
                },
                h4: {
                    marginTop: 12,
                    marginBottom: 2,
                    fontSize: 16,
                    fontFamily: "default-medium",
                },
                strong: { fontFamily: "default-medium" },
            }}
        />
    );
};

const styles = StyleSheet.create({
    htmlBaseFontStyle: {
        color: Theme.colors.black,
        fontSize: 15,
        fontFamily: "default-regular",
        textAlign: "justify",
    },
});
