import { FC } from "react";
import { Ionicons, Feather, AntDesign,FontAwesome } from '@expo/vector-icons';
import { TCustomIcon } from "./type";

const CustomIcon: FC<TCustomIcon> = (props) => {
    const { name, size, color, as, focused } = props;

    const IconComponent = {
        Ionicons: Ionicons,
        Feather: Feather,
        AntDesign: AntDesign,
        FontAwesome:FontAwesome
    }[as] || Ionicons;
    const iconStyle = focused ? { color: 'blue' } : {};


    return (
        <IconComponent
            //@ts-ignore
            name={name}
            size={size}
            color={color}
            style={iconStyle}
        />
    );
}

export default CustomIcon;