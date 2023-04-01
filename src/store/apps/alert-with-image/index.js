import { createSlice } from '@reduxjs/toolkit'

export const AlertWithImageSlice = createSlice({
  name: 'alert_with_image',
  initialState: {
    isShow: false,
    data: null
  },
  reducers: {
    setAlertWithImage: (state, action) => {
      const { data = null } = action.payload
      state.data = data
      state.isShow = true
    },
    resetAlertWithImage: (state, action) => {
      state.data = null
      state.isShow = false
    }
  }
})

export const raiseAlertWithImage = alertContent => async (dispatch, getState) => {
  dispatch(AlertWithImageSlice.actions.setAlertWithImage(alertContent))
}

export const closeAlertWithImage = () => async (dispatch, getState) => {
  dispatch(AlertWithImageSlice.actions.resetAlertWithImage())
}

export default AlertWithImageSlice.reducer
