import { createSlice } from '@reduxjs/toolkit'

export const AlertWithoutImageSlice = createSlice({
  name: 'alert_without_image',
  initialState: {
    isShow: false,
    data: null
  },
  reducers: {
    setAlertWithoutImage: (state, action) => {
      const { data = null } = action.payload
      state.data = data
      state.isShow = true
    },
    resetAlertWithoutImage: (state, action) => {
      state.data = null
      state.isShow = false
    }
  }
})

export const raiseAlertWithoutImage = alertContent => async (dispatch, getState) => {
  dispatch(AlertWithoutImageSlice.actions.setAlertWithoutImage(alertContent))
}

export const closeAlertWithoutImage = () => async (dispatch, getState) => {
  dispatch(AlertWithoutImageSlice.actions.resetAlertWithoutImage())
}

export default AlertWithoutImageSlice.reducer
