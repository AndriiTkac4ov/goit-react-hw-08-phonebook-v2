import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            //Register
            // .addCase(authOperations.register.pending, state => {
            //     state.status = 'loading';
            // })
            .addCase(authOperations.register.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            // .addCase(authOperations.register.rejected, state => {
            //     state.status = 'rejected';
            // })
            .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
    },
});

export default authSlice.reducer;