import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counterSlice'
import authSlice from './slices/authSlice'


const store = configureStore({
    reducer: {
      counterSlice,
        authSlice
    },
  });
  
  export default store;
