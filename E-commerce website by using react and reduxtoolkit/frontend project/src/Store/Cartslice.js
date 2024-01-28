import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"Cart",
    initialState:[],
    reducers:({
//add reducer
addtocart(state,action){
    state.push(action.payload);
},
//remove 
remove(state,action){
 return state.filter((item)=>(item.id!==action.payload))
},
    })
});
export const{addtocart,remove}=cartslice.actions
export default cartslice.reducer