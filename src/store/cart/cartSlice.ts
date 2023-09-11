import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICar } from '../../modules/product/types/car'
import { RootState } from '..'

export interface CartState {
  list: ICar[]
}

const initialState: CartState = {
  list: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICar>) => {
      state.list.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export const selectCartCount = (state: RootState) => state.cart.list.length

export default cartSlice.reducer