import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import { deleteRequestAccess, getListRequestAccess, updateRequestAccess } from 'src/api/request-access'

// ** Fetch Access Events
export const fetchRequestAccess = createAsyncThunk('requestAccess/fetchRequestAccess', async ({ token, params }) => {
  const response = await getListRequestAccess(token, params)
  return response
})

export const modifyRequestAccess = createAsyncThunk(
  'requestAccess/modifyRequestAccess',
  async ({ token, requestId, updateInfo }) => {
    await updateRequestAccess(token, requestId, updateInfo)
    return { id: requestId, updateInfo }
  }
)

export const removeRequestAccess = createAsyncThunk(
  'requestAccess/removeRequestAccess',
  async ({ token, requestId }) => {
    await deleteRequestAccess(token, requestId)
    return { id: requestId }
  }
)

export const RequestAccessSlice = createSlice({
  name: 'requestAccess',
  initialState: {
    data: [],
    total: 0,
    page: 0,
    last_page: 0
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRequestAccess.fulfilled, (state, action) => {
        const { data = [], total = 0, page = 0, last_page = 0 } = action.payload
        state.data = data
        state.total = total
        state.page = page
        state.last_page = last_page
      })
      .addCase(modifyRequestAccess.fulfilled, (state, action) => {
        const { id, updateInfo } = action.payload
        const changedIdx = state.data.findIndex(item => item.id == id)
        state.data[changedIdx] = { ...state.data[changedIdx], ...updateInfo }
      })
      .addCase(removeRequestAccess.fulfilled, (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload.id)
      })
  }
})

export default RequestAccessSlice.reducer
