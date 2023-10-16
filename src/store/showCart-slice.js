import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
    name: "showCart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        changed: false,
    },
    reducers: {
        setShowCart(state) {
            state.showCart = !state.showCart;
        }
    }

})
export const showCartActions = showCartSlice.actions;
export default showCartSlice;