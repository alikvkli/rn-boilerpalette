import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialStateProps{
    isLoading:boolean
}

const initialState:InitialStateProps = {
    isLoading:false
}

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setLoading(state, action:PayloadAction<InitialStateProps['isLoading']>) {
            state.isLoading = action.payload;
        }
    }
});

export const {
    setLoading
} = configSlice.actions
export  default configSlice.reducer;