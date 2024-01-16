import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// export interface CounterState {
//   value: number
// }

// const initialState = {
//   data: [],
// basket:[],
// wishlist:[]
// }
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await axios("http://localhost:3000/posts");
    return response.data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: null,
    cart: JSON.parse(localStorage.getItem("basket")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(state.cart));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
      localStorage.setItem("basket", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("basket", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
      localStorage.setItem("basket", JSON.stringify(state.cart));
    },
    addtoWishlist: (state, action) => {
      const itemInWishlist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInWishlist) {
        state.wishlist = [...state.wishlist, action.payload];
      } else {
        state.wishlist = state.wishlist.filter(
          (elem) => elem.id !== action.payload.id
        );
      }
      // if (itemInCart) {
      //   itemInCart.quantity++;
      // } else {
      //   state.cart.push({ ...action.payload, quantity: 1 });
      // }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  addtoWishlist,
} = userSlice.actions;

export default userSlice.reducer;
