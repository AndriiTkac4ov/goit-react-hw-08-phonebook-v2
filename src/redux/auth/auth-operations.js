import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        toast.success('Congratulate! You have just become the owner of Phonebook!');

        return data;
    } catch (error) {
        console.log(error);
        toast.error('No way! But we have already a client with the same email!');
    }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        toast.success('Finally! We missed you.');

        return data;
    } catch (error) {
        console.log(error);
        toast.error('Do not hurry! Something is wrong with your email or password.');
    }
});

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
        toast.success('Good bye! Hope to see you soon.');
    } catch (error) {
        console.log(error);
        toast.error('Houston! We have a problem!');
    }
});

const refreshCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    
    if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const authOperations = {
    register,
    logIn,
    logOut,
    refreshCurrentUser,
}
