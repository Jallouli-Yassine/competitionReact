import {combineReducers, configureStore} from "@reduxjs/toolkit";
import participantReducer from "./whichlist/whichlistslice";
export const store = configureStore({
    reducer: {
        participant:participantReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;