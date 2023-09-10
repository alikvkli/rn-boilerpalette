import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialStateProps{
    userData:{
        username?:string
    },
    login:boolean
}

const initialState:InitialStateProps = {
    userData: {},
    login: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin(state, action:PayloadAction<InitialStateProps['userData']>) {
            state.userData = action.payload;
            state.login = true;
        },
        setLogout(state) {
            state.login = false;
            state.userData = {}
        }
    }
});

export const {
    setLogin,
    setLogout
} = userSlice.actions
export  default userSlice.reducer;