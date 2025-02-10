import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  user: any
}

const initialState: AuthState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer
