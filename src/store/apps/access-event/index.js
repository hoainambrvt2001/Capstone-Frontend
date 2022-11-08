import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Access Events
export const fetchAccessEvents = createAsyncThunk('appAccessEvents/fetchAccessEvents', async params => {
  const response = await axios.get('/apps/access-event/list', {
    params
  })
  return response.data
})

export const appAccessEventsSlice = createSlice({
  name: 'appAccessEvents',
  initialState: {
    data: [],
    total: 1
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAccessEvents.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.total = action.payload.total
    })
  }
})

export default appAccessEventsSlice.reducer
