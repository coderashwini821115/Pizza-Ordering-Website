import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
    Pizza:[],
    ingredients:[],
    totalQuantity:0,
    totalPricePizza:0,
    totalpriceIngredient:0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action)
            state.Pizza.push(action.payload)
            state.totalQuantity += 1
            state.totalPricePizza += action.payload.price
        },
        removeFromCart: (state, action) => {
            state.Pizza = state.Pizza.filter((p) => p.id != action.payload.id)
            state.totalQuantity -= 1;
            state.totalPricePizza -= action.payload.price;
        }, 
        addIng : (state, action) => {
            state.ingredients.push(action.payload)
            state.totalpriceIngredient += action.payload.price
        },
        removeIng: (state, action) => {
            state.ingredients = state.ingredients.filter((ing) => ing.id != action.payload.id)
            state.totalpriceIngredient -= action.payload.price
        },
        clearCart: (state, action) => {
            state.Pizza = [];
            state.ingredients = [];
            state.totalPricePizza = 0;
            state.totalQuantity = 0;
            state.totalpriceIngredient = 0;
          }
        
    }
})
console.log(cartSlice)
export const {addToCart, removeFromCart, addIng, removeIng, clearCart} = cartSlice.actions;
export default cartSlice.reducer