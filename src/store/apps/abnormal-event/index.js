import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Abnormal Events
export const fetchData = createAsyncThunk('appAbnormalEvents/fetchData', async params => {
  const response = await axios.get('/apps/abnormal-event/list', {
    params
  })

  console.log(response)

  return response.data
})

export const appAbnormalEventsSlice = createSlice({
  name: 'appAbnormalEvents',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.abnormalEvents
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appAbnormalEventsSlice.reducer
