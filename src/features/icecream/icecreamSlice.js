import { createSlice } from "@reduxjs/toolkit";
import {ordered as cakeOrdered} from "../cake/cakeSlice"
const initialState = {
  numOfIceCream: 20,
};
export const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  // extraReducers: {
  //   ['cake/ordered']:(state)=>{
  //     state.numOfIceCream--
  //   }
  // }
    //implementing such that if a user buy a cake ,he will get a icecream free (offer).

  extraReducers:(builder)=>{
    builder.addCase(cakeOrdered,state=>{
      state.numOfIceCream--
    })

  }
});
export const { ordered, restocked } = icecreamSlice.actions;
export default icecreamSlice.reducer;
