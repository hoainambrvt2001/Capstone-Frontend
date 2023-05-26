import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Api Imports
import { addNewRoom, getListRoom, updateRoom } from 'src/api/room'

// ** Fetch Rooms
export const fetchRooms = createAsyncThunk('room/fetchRooms', async ({ token, params }) => {
  const response = await getListRoom(token, params)
  return response
})

// ** Add Room
export const addRoom = createAsyncThunk('room/addRoom', async ({ token, roomInfo }) => {
  const response = await addNewRoom(token, roomInfo)
  return response.data
})

// ** Modify Room
export const modifyRoom = createAsyncThunk('room/modifyRoom', async ({ token, roomId, updateInfo }) => {
  const response = await updateRoom(token, roomId, updateInfo)
  return { id: roomId, updateInfo }
})

// ** Delete Room
export const removeRoom = createAsyncThunk('room/removeRoom', async ({ token, roomId }) => {
  const response = await terminateRoom(token, roomId)
  return { id: roomId }
})

export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    data: [],
    total: 0,
    page: 0,
    last_page: 0
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRooms.fulfilled, (state, action) => {
        if (action.payload) {
          const { data = [], total = 0, page = 0, last_page = 0 } = action.payload
          state.data = data
          state.total = total
          state.page = page
          state.last_page = last_page
        }
      })
      .addCase(addRoom.fulfilled, (state, action) => {
        if (action.payload) {
          state.data.push(action.payload)
        }
      })
      .addCase(modifyRoom.fulfilled, (state, action) => {
        if (action.payload) {
          const { id, updateInfo } = action.payload
          const changedIdx = state.data.findIndex(item => item.id == id)
          state.data[changedIdx] = { ...state.data[changedIdx], ...updateInfo }
        }
      })
      .addCase(removeRoom.fulfilled, (state, action) => {
        if (action.payload) {
          state.data = state.data.filter(item => item.id !== action.payload.id)
        }
      })
  }
})

export default roomSlice.reducer
