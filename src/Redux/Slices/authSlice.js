import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin:localStorage.getItem('islogin')||false,
  role:localStorage.getItem('role')||"",
  data:localStorage.getItem('data')||{}

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const {  } = authSlice.actions

export default authSlice.reducer