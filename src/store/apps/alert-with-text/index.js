import { createSlice } from '@reduxjs/toolkit'

export const AlertWithTextSlice = createSlice({
  name: 'alert_with_text',
  initialState: {
    isShow: false,
    data: null
  },
  reducers: {
    setAlertWithText: (state, action) => {
      const { data = null } = action.payload
      state.data = data
      state.isShow = true
    },
    resetAlertWithText: (state, action) => {
      state.data = null
      state.isShow = false
    }
  }
})

export const raiseAlertWithText = alertContent => async (dispatch, getState) => {
  dispatch(AlertWithTextSlice.actions.setAlertWithText(alertContent))
}

export const closeAlertWithText = () => async (dispatch, getState) => {
  dispatch(AlertWithTextSlice.actions.resetAlertWithText())
}

export default AlertWithTextSlice.reducer
