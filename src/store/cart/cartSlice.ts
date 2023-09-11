import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICar } from '../../modules/product/types/car'
import { RootState } from '..'

export interface CartState {
  list: string[]
  keys: any
  qty: any
}

const initialState: CartState = {
  list: [],
  keys: {},
  qty: {}
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICar>) => {
      const key = action.payload.id
      state.keys[key] = action.payload
      if(!state.list.includes(key)) {
        state.qty[key] = 1
        state.list.push(key)
      } else {
        state.qty[key]++
      }
    },
    addItem: (state, action: PayloadAction<ICar>) => {
      const key = action.payload.id
      state.qty[key]++
    },
    removeItem: (state, action: PayloadAction<ICar>) => {
      const key = action.payload.id
      state.qty[key]--
      if(state.qty[key] <= 0) {
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
    const qty = state.cart.qty?.[key]
    const newData = {
      ...data,
      qty,
    }
    list.push(newData)
  })
  return list
}

export default cartSlice.reducer