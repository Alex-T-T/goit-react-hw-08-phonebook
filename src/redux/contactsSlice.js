import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
    tagTypes: ['Contacts'],
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
        })
    }),
})

export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation } = contactsApi
