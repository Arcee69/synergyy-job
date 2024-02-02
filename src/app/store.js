import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';

import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import loginReducer from "../features/auth/loginSlice";



    const persistConfig = {
        key: 'root',
        storage,
    };

    //All reducers should be put here so as to access it across the app
    const rootReducer = combineReducers({
        userLogin: loginReducer,
    });
  
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    export const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    });

export const persistor = persistStore(store)

