import { configureStore} from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contactsApi } from "./contactsSlice";
import { filterSlice } from "./filterSlice";
// import { userAuthApi, persistUserAuthApi } from "./userSlice";
// import {userAuthApi} from "./userSlice";
import {persistUserAuthApi} from './userAuth/userAuth-slice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

export const store = configureStore({
    reducer: {
        // [userAuthApi.reducerPath]: persistUserAuthApi,
        userAuth: persistUserAuthApi,
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        contactsApi.middleware,
    ]
})

export const persistor = persistStore(store);

// setupListeners(store.dispatch)
