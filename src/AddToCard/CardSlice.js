import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "card",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export default CardSlice.reducer;
export const { addCart } = CardSlice.actions;
