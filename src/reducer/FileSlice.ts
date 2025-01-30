import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: '',
}

export const fileSlice = createSlice({
  name: 'File',
  initialState,
  reducers: {
    saveFileName: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveFileName, incrementByAmount } = fileSlice.actions

export default fileSlice.reducer
