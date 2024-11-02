import { configureStore, createSlice } from "@reduxjs/toolkit";



// const INITIAL_VALUE={
//     counter:0,
//     privecy:false
// }

const counterSlice=createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
        increment:(state)=>{
           state.counterVal++;

        },
        decrement:(state)=>{
            state.counterVal--;
        },
        add:(state,action)=>{
            state.counterVal+=Number(action.payload.num);
        },
        subtract:(state,action)=>{
            state.counterVal-=Number(action.payload.num);
        },
    }
})

const privacySlice=createSlice({
    name:'privacy',
    initialState:false,
    reducers:{
        toggle:(state)=>{
            return state=!state;
        }
}
})




const counterStore=configureStore({reducer:{
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer

}})

export const privacyAction=privacySlice.actions;
export  const  counterAction=counterSlice.actions;
export default counterStore;