import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export enum EnumAlert {
  success = 'success',
  info = 'info',
  error = 'error',
  warning = 'warning',
}

export interface NotificationState {
  visible?: boolean
  status: EnumAlert
  message: string
}

const initialState: NotificationState = {
  visible: false,
  status: EnumAlert.info,
  message: ''
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationState>) => {
      state.status = action.payload.status
      state.message = action.payload.message
      state.visible = true
    },
    closeNotification: (state) => {
      state.visible = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setNotification, closeNotification } = notificationSlice.actions

export const selectNotification = (state: RootState) => state.notification

export default notificationSlice.reducer