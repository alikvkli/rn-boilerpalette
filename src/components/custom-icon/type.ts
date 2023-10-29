
export type IconProps = {
    name: string;
    size: number;
    color?: string;
};

export type IconLibrary = {
    Ionicons: React.ComponentType<IconProps>;
    Feather: React.ComponentType<IconProps>;
    AntDesign: React.ComponentType<IconProps>;
    FontAwesome: React.ComponentType<IconProps>;
};


export type TCustomIcon = IconProps & {
    as: keyof IconLibrary;
    focused?: boolean;
}