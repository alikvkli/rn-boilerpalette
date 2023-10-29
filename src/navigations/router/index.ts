import { TTabRouter } from "./types"



export const TabRouter: TTabRouter = {
    HomeTab: {
        title: "Anasayfa",
        icon: {
            as: "AntDesign",
            name: "home",
            size: 24
        }
    },
    TestTab: {
        title: "Test",
        icon: {
            as: "AntDesign",
            name: "infocirlce",
            size: 24
        }
    }
}

export const ScreenRouter = {
    HomeScreen: "HomeScreen",
    LoginScreen: "LoginScreen",
    TestScreen: "TestScreen",
}