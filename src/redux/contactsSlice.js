import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import axios from 'axios'

// const axiosBaseQuery =
//   ({ baseUrl } = { baseUrl: '' }) =>
//   async ({ url, method, data, params }) => {
//     try {
//       const result = await axios({ url: baseUrl + url, method, data, params })
//       return { data: result.data }
//     } catch (axiosError) {
//       let err = axiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = getState().userAuth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    // baseQuery: axiosBaseQuery({
    //     baseUrl: 'https://connections-api.herokuapp.com',
    //     prepareHeaders: (headers, { getState }) => {
    //   // By default, if we have a token in the store, let's use that for authenticated requests
    //     const token = getState().userAuth.token
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`)
    //   }
    //   return headers
    // }
    // }),
    tagTypes: ['Contacts'],

    //     endpoints: (build) => {
    //         return {
    //             getContacts: build.query({
    //                 query: () => ({ url: '/contacts', method: 'GET' }),
    //                 providesTags: ["Contacts"]
    //             }),
        
    //             addContact: build.mutation({
    //                 query: (values) => ({
    //                     url: "/contacts",
    //                     method: "POST",
    //                     body: values,
    //                 }),
    //                 invalidatesTags: ["Contacts"]
    //             }),

    //             removeContact: build.mutation({
    //                 query: (id) => ({
    //                     url: `contacts/${id}`,
    //                     method: "DELETE",
    //                 }),
    //                 invalidatesTags: ["Contacts"]
    //             })
    //         }
    //     }
    // });
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => "contacts",
            url: '/contacts',
            method: 'GET',
            providesTags: ["Contacts"]
        }),
    
        addContact: builder.mutation({
            query: (values) => ({
                url: "/contacts",
                method: "POST",
                body: values,
            }),
            invalidatesTags: ["Contacts"]
        }),

        removeContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Contacts"]
        }),

        updateContact: builder.mutation({
            query: ({id, ...contact}) => ({
                url: `contacts/${id}`,
                method: "PATCH",
                body: contact,
            }),
            invalidatesTags: ["Contacts"]
        }),
    })
})

export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation, useUpdateContactMutation } = contactsApi;
