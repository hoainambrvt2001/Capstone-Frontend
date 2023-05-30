import { createSlice } from '@reduxjs/toolkit'

export const DialogImageSlice = createSlice({
  name: 'dialog_image',
  initialState: {
    isShow: false,
    title: '',
    images: []
  },
  reducers: {
    setDialogImage: (state, action) => {
      const { title = '', images = [] } = action.payload
      state.images = images
      state.title = title
      state.isShow = true
    },
    resetDialogImage: (state, action) => {
      state.images = []
      state.title = ''
      state.isShow = false
    }
  }
})

export const raiseDialogImage = dialogContent => async (dispatch, getState) => {
  dispatch(DialogImageSlice.actions.setDialogImage(dialogContent))
}

export const closeDialogImage = () => async (dispatch, getState) => {
  dispatch(DialogImageSlice.actions.resetDialogImage())
}

export default DialogImageSlice.reducer
