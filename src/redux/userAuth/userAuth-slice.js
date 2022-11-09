import { createSlice } from "@reduxjs/toolkit";
import userAuthOperations from './userAuth-operations';
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}

const userAuthApiSlice = createSlice({
    name: 'userAuth',
    initialState,
    extraReducers: {
        [userAuthOperations.userRegistration.fulfilled]:(state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },

        [userAuthOperations.userLogin.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },

        [userAuthOperations.userLogin.rejected]: (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },

        [userAuthOperations.userLogin.pending]: (state, action) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },

        [userAuthOperations.userLogout.fulfilled]: (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },

        [userAuthOperations.getCurrentUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
    },

});

const persistConfig = {
    key: "phonebookUserAuth",
    storage,
    whitelist: ['token'],
}

export const persistUserAuthApi = persistReducer(persistConfig, userAuthApiSlice.reducer)

// export default userAuthApiSlice.reducer