import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Fetch Rooms
export const fetchData = createAsyncThunk('appRooms/fetchData', async params => {
  const roomData = await axios
    .get('/apps/rooms/list', {
      params
    })
    .then(res => res.data)
  const buildingData = await axios.get('apps/rooms/list-building').then(res => res.data)
  return {
    roomData,
    buildingData
  }
})

// ** Add Room
export const addRoom = createAsyncThunk('appRooms/addRoom', async (data, { getState, dispatch }) => {
  const response = await axios.post('/apps/rooms/add-room', {
    data
  })
  dispatch(fetchData(getState().room.params))

  return response.data
})

// ** Delete Room
export const deleteRoom = createAsyncThunk('appRooms/deleteRoom', async (id, { getState, dispatch }) => {
  const response = await axios.delete('/apps/rooms/delete', {
    data: id
  })
  dispatch(fetchData(getState().room.params))

  return response.data
})

export const appRoomsSlice = createSlice({
  name: 'appRooms',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    allBuildings: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.roomData.rooms
      state.total = action.payload.roomData.total
      state.params = action.payload.roomData.params
      state.allData = action.payload.roomData.allData
      state.allBuildings = action.payload.buildingData.all_buildings
    })
  }
})

export default appRoomsSlice.reducer
