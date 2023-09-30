import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Slices/authSlice'
import CourseSlice from './Slices/CourseSlice'

export const store = configureStore({
  reducer: {
   auth:authSlice,
   course: CourseSlice,
  },
  devTools:true,
})