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
            .addCase(authOperations.register.pending, state => {
                state.status = 'loading';
            })
            .addCase(authOperations.register.fulfilled, (state, { payload }) => {
                state.status = 'fulfilled';
                state.data = payload;
            })
            .addCase(authOperations.register.rejected, state => {
                state.status = 'rejected';
            })
    },
});

export default authSlice.reducer;