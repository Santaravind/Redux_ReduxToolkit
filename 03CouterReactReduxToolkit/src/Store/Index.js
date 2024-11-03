import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./Counter";
import privacySlice from "./Privecy";


const counterStore=configureStore({reducer:{
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer

}})


export default counterStore;