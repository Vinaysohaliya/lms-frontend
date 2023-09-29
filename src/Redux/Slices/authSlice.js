import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'
import axiosInstance from '../../helpers/axiosInstances'
import { registry } from 'chart.js'

const initialState = {
  isLogin: localStorage.getItem('islogin') || false,
  role: localStorage.getItem('role') || "",
  data: localStorage.getItem('data') || {}

}

export const creatAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("user/register", data)
    toast.promise(res, {
      loading: "Wait ",
      success: (data) => {
        return data?.data?.message;
      },
      error: "failed to creat account"
    })
    registry(await res).data;   
  } catch (error) {
    toast.error(error?.response?.data?.message)
  }
}
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
// export const {  } = authSlice.actions

export default authSlice.reducer