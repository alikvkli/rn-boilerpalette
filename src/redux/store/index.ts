import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit"
import user from "../features/user";
import config from "../features/config";

const reducers = combineReducers({
    user,
    config
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck:false}),
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

