import axiosClient from './axiosClient'

export const getAllRooms = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/room/all`, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export const getListRoom = async (token, params) => {
  const { page = 0, limit = 9, type = '', status = '', q = '' } = params
  let url = `/room?page=${page + 1}&limit=${limit}&q=${q}&type=${type}&status=${status}`
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(url, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export const getRoomDetail = async (token, roomId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/room/${roomId}`, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export const addNewRoom = async (token, roomInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .post(`/room`, roomInfo, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export const updateRoom = async (token, roomId, updateInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .patch(`/room/${roomId}`, updateInfo, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export const terminateRoom = async (token, roomId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .delete(`/room/${roomId}`, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}
