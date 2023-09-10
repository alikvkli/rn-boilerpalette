import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import { Theme } from "../../theme";
import { CircleIconButton } from "./CircleIconButton";

type TProps = {
    isMarked: boolean;
    style: StyleProp<ViewStyle>;
    onClick: () => void;
};

export const BookMarkButton: React.FC<TProps> = ({ isMarked, style, onClick }) => {
    return (
        <CircleIconButton
            iconName={"ios-bookmarks"}
            iconColor={isMarked ? Theme.colors.primaryColorDark : Theme.colors.gray}
            style={style}
            onPress={onClick}
        />
    );
};
