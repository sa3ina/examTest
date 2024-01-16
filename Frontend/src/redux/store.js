import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/slices/Slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

