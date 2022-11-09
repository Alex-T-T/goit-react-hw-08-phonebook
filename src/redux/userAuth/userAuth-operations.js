import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'; 

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const userRegistration = createAsyncThunk('userAuth/registration', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        toast.success('Registration is success!')
        token.set(data.token);
        return data;
    } catch (error) {
        toast.error(`${error.message}`);
    }
})

const userLogin = createAsyncThunk('userAuth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        toast.success("Let's go! You are in..!");
        token.set(data.token);
        return data;
    } catch (error) {
        toast.error(`Uncorrect login or password!`);
    }
})

const userLogout = createAsyncThunk('userAuth/logout', async () => {
    try {
        await axios.post('/users/logout');
        toast.success("Bye Bye!")
        token.unset();

    } catch (error) {
        toast.error(`${error.message}`);
    }
})


const getCurrentUser = createAsyncThunk('userAuth/refreshUser', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const tokenPersist = state.userAuth.token
    console.log(tokenPersist)

    if (tokenPersist === null) {
        return thunkAPI.rejectWithValue();
    }

    token.set(tokenPersist)
    try {
        const {data } = await axios.get('/users/current');
        // toast.success("We found current user!")
        return data;
    } catch (error) {
        toast.error(`${error.message}`);
    }

})

const userAuthOperations = { userRegistration, userLogin, userLogout, getCurrentUser };
export default userAuthOperations;