import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            //Register
            .addCase(authOperations.register.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })

            //LogIn
            .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })

            //LogOut
            .addCase(authOperations.logOut.fulfilled, (state, { payload }) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })

            //Refresh
            .addCase(authOperations.refreshCurrentUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(authOperations.refreshCurrentUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(authOperations.refreshCurrentUser.rejected, state => {
                state.isRefreshing = false;
            })
    },
});

export default authSlice.reducer;