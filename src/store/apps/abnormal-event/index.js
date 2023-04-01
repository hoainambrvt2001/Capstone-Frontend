import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import { getListAbnormalEvent, updateAbnormalEvent } from 'src/api'

// ** Fetch Abnormal Events
export const fetchAbnormalEvents = createAsyncThunk('abnormalEvent/fetchAbnormalEvents', async ({ token, params }) => {
  const response = await getListAbnormalEvent(token, params)
  return response
})

// ** Modify Abnormal Events
export const modifyAbnormalEvent = createAsyncThunk(
  'abnormalEvent/modifyAbnormalEvent',
  async ({ token, eventId, updateInfo }) => {
    await updateAbnormalEvent(token, eventId, updateInfo)
    return { id: eventId, updateInfo }
  }
)

export const AbnormalEventsSlice = createSlice({
  name: 'abnormalEvent',
  initialState: {
    data: [],
    total: 0,
    page: 0,
    last_page: 0
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAbnormalEvents.fulfilled, (state, action) => {
        const { data = [], total = 0, page = 0, last_page = 0 } = action.payload
        state.data = data
        state.total = total
        state.page = page
        state.last_page = last_page
      })
      .addCase(modifyAbnormalEvent.fulfilled, (state, action) => {
        const { id, updateInfo } = action.payload
        const changedIdx = state.data.findIndex(item => item.id == id)
        state.data[changedIdx] = { ...state.data[changedIdx], ...updateInfo }
      })
  }
})

export default AbnormalEventsSlice.reducer
