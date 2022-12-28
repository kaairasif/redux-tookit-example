import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'
import productSlice from './productSlice';

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit';


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    cart: cartSlice.reducer, 
    products: productSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    reducer: persistedReducer
})

// export default store;