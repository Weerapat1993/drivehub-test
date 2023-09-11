import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICar } from '../../modules/product/types/car'
import { RootState } from '..'

export interface CartState {
  list: string[]
  keys: any
}

const initialState: CartState = {
  list: [],
  keys: {},
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICar>) => {
      const key = action.payload.id
      if(!state.list.includes(key)) {
        state.keys[key] = action.payload
        state.keys[key].qty = 1
        state.list.push(key)
      } else {
        state.keys[key].qty++
      }
    },
    addItem: (state, action: PayloadAction<ICar>) => {
      const key = action.payload.id
      state.keys[key].qty++
    },
    removeItem: (state, action: PayloadAction<ICar>) => {
      const key = action.payload.id
      state.keys[key].qty--
      if(state.keys[key].qty <= 0) {
        state.list = state.list.filter(listKey => listKey !== key)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, addItem, removeItem } = cartSlice.actions

export const selectCartCount = (state: RootState) => state.cart.list.length
export const selectCartItems = (state: RootState) => {
  let list: ICar[] = []
  state.cart.list.forEach(key => {
    const data = state.cart.keys?.[key]
    list.push(data)
  })
  return list
}

export default cartSlice.reducer