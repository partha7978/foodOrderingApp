import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        resName: "",
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        addResName: (state, action) => {
            state.resName = action.payload;  
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearCart, addResName } = cartSlice.actions;

export default cartSlice.reducer;