import { createSlice } from '@reduxjs/toolkit'

export const ImageDialogSlice = createSlice({
  name: 'image_dialog',
  initialState: {
    isShow: false,
    title: '',
    images: []
  },
  reducers: {
    setImageDialog: (state, action) => {
      const { title = '', images = [] } = action.payload
      state.images = images
      state.title = title
      state.isShow = true
    },
    resetImageDialog: (state, action) => {
      state.images = []
      state.title = ''
      state.isShow = false
    }
  }
})

export const openImageDialog = dialogContent => async (dispatch, getState) => {
  dispatch(ImageDialogSlice.actions.setImageDialog(dialogContent))
}

export const closeImageDialog = () => async (dispatch, getState) => {
  dispatch(ImageDialogSlice.actions.resetImageDialog())
}

export default ImageDialogSlice.reducer
