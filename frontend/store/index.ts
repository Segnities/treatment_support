import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";

const rootReducer = combineReducers({
    auth: authSlice.reducer
});

 const store = configureStore({
    reducer: rootReducer
});

 export default store;