import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";

const rootReducer = combineReducers({
    auth: authSlice.reducer
});

 const store = configureStore({
    reducer: rootReducer
});

 export type RootState = ReturnType<typeof store.getState>;
 export default store;