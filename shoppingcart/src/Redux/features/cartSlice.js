import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  items: [],
  whishlist: [],
  totalQuantity: 0,
  totalPrice: 0,
  discount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    alldata(state, action) {
      state.items = action.payload;
    },
    add(state, action) {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        toast.warning("Item is alredy in cart");
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success("Product add in cart");
      }
    },
    remove(state, action) {
      state.cart = state.cart.filter((el) => el.id != action.payload);
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      if (totalPrice >= 1000) {
        state.discount = 0.5; // 50% discount for total price >= 1000
      } else if (totalPrice >= 600) {
        state.discount = 0.4; // 40% discount for total price >= 600
      } else if (totalPrice >= 300) {
        state.discount = 0.2; // 20% discount for total price >= 300
      } else {
        state.discount = 0; // No discount otherwise
      }

      // Apply discount to the total price
      state.totalPrice = (totalPrice - totalPrice * state.discount).toFixed(2);
      state.totalQuantity = totalQuantity;
    },
    incrementQuantity(state, action) {
      const item = state.cart.find((item) => item.id == action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const item = state.cart.find((item) => item.id == action.payload);
      if (item) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  alldata,
  add,
  remove,
  incrementQuantity,
  decrementQuantity,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
