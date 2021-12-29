import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from '../store'

interface CartState {
    items: {id: number, name: string, price: number, quantity: number}[] //todo (Dylan Muraco): change this after prisma is updated
}

const initialState: CartState = {
    items: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{id: number, name: string, price: number, quantity: number}>) => {
            for(var i = 0; i < state.items.length; i++){
                let item = state.items[i]
                if (item.id === action.payload.id) {
                    state.items[i].quantity +=1
                    return
                }
            }
            state.items.push(action.payload)
        },
        remove: (state, action: PayloadAction<{id: number}>) => {
            for(var i = 0; i < state.items.length; i++) {
                let item = state.items[i]
                if (item.id === action.payload.id) {
                    state.items = [
                        ...state.items.slice(0, i),
                        ...state.items.slice(i, -1)
                    ]
                }
            }
        },
        decrementQuantity: (state, action: PayloadAction<{id: number}>) => {
            for(var i = 0; i < state.items.length; i++){
                let item = state.items[i]
                if (item.id === action.payload.id) {
                    if(item.quantity - 1 <= 0) {
                        state.items = [
                            ...state.items.slice(0, i),
                            ...state.items.slice(i, -1)
                        ]
                    } else {
                        state.items[i].quantity -=1

                    }
                    return
                }
            }
        },
        incrementQuantity: (state, action: PayloadAction<{id: number}>) => {
            for(var i = 0; i < state.items.length; i++){
                let item = state.items[i]
                if (item.id === action.payload.id) {
                    state.items[i].quantity +=1
                    return
                }
            }
        }
    }
})

export const {add, remove, decrementQuantity, incrementQuantity} = CartSlice.actions

export const selectCount = (state: RootState) => state.cart

export default CartSlice.reducer