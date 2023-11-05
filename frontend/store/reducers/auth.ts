import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

import type {User} from "firebase/auth";

export type AuthState = {
  isAuth: boolean;
  user: User | null;
};

const initialState:AuthState = {
    isAuth: false,
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action:PayloadAction<string>) {
            state.isAuth = true;
            state.user = JSON.parse(action.payload);
        },
        signOut(state  ) {
            state.isAuth = false;
            state.user = null;
        }
    }
});

export const {login, signOut} = authSlice.actions;
export default authSlice;