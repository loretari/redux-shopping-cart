import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.itemsList = action.payload.itemsList;
        },
        addToCart(state, action) {
            state.changed = true;
            state.totalQuantity++;
            const newItem = action.payload;
            // to check if item is already available
            const existingItem = state.itemsList.find(
                (item) => item.id === newItem.id
            );

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price

            } else {
                state.itemsList.push({
                    id: newItem.id,
                    imgURL: newItem.imgURL,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });

            }
        },
        removeFromCart(state, action) {
            state.changed = true;
            state.totalQuantity--;
            const id = action.payload;

            const existingItem = state.itemsList.find(item=> item.id === id);
            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !==id)

            } else {
                existingItem.quantity--;

                existingItem.totalPrice = existingItem.totalPrice - existingItem.price

            }
        },

    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;



