// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { persistReducer } from 'redux-persist';
// import storage from "redux-persist/lib/storage";

// export const userAuthApi = createApi({
//     reducerPath: 'userAuth',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://connections-api.herokuapp.com',
//         prepareHeaders: (headers, { getState }) => {
//         const {token = ''} = getState().userAuth

//         // If we have a token set in state, let's assume that we should be passing it.
//         if (token) {
//         headers.set('authorization', token)
//         }

//         return headers
//         },
//     }),
    
//     tagTypes: ['user'],
//     endpoints: (builder) => ({
        
//         createNewUser: builder.mutation({
//             query: (values) => ({
//                 url: "/users/signup",
//                 method: "POST",
//                 body: values,
//             }),
//             invalidatesTags: ["user"],
//         }),

//         loginUser: builder.mutation({
//             query: (values) => ({
//                 url: "/users/login",
//                 method: "POST",
//                 body: values,
//             }),
//             invalidatesTags: ["user"],
//         }),

//         logOutUser: builder.mutation({
//             query: () => ({
//                 url: "/users/logout",
//                 method: "POST",
//                 // AUTHORIZATION TOKEN
//             }),
//             invalidatesTags: ["user"],
//         }),

//         currentUser: builder.query({
//             query: () => ({
//                 url: "/users/current",
//                 method: "GET",
//                 // AUTHORIZATION TOKEN
//             }),
//             invalidatesTags: ["user"],
//         }),
//     })
// })

// const persistConfig = {
//     key: "phonebookUserAuth",
//     storage,
//     whitelist: ['token'],
// }

// export const persistUserAuthApi = persistReducer(persistConfig, userAuthApi.reducer)

// export const {useCurrentUserQuery, useCreateNewUserMutation, useLoginUserMutation, useLogOutUserMutation} = userAuthApi