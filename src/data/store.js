import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'
import test from './test'


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer, 
        test: test.reducer,      
    },
})

export default store;