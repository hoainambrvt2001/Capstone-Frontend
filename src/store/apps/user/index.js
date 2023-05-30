import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import { getListUser, addNewUser, updateUser, deleteUser } from 'src/api/user'

// ** Fetch Users
export const fetchUsers = createAsyncThunk('user/fetchUsers', async ({ token, params }) => {
  const response = await getListUser(token, params)
  return response
})

// ** Add User
export const addUser = createAsyncThunk('user/addUser', async ({ token, userInfo }) => {
  const response = await addNewUser(token, userInfo)
  return response.data
})

// ** Modify User
export const modifyUser = createAsyncThunk('user/modifyUser', async ({ token, userId, updateInfo }) => {
  await updateUser(token, userId, updateInfo)
  return { id: requestId, updateInfo }
})

// ** Delete User
export const removeUser = createAsyncThunk('user/removeUser', async ({ token, userId }) => {
  const response = await deleteUser(token, userId)
  return { id: response.data.id }
})

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    total: 0,
    page: 0,
    last_page: 0
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        const { data = [], total = 0, page = 0, last_page = 0 } = action.payload
        state.data = data
        state.total = total
        state.page = page
        state.last_page = last_page
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload)
      })
      .addCase(modifyUser.fulfilled, (state, action) => {
        const { id, updateInfo } = action.payload
        const changedIdx = state.data.findIndex(item => item.id == id)
        state.data[changedIdx] = { ...state.data[changedIdx], ...updateInfo }
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload.id)
      })
  }
})

export default UserSlice.reducer
