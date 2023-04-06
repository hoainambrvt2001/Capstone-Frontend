import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://dacn-backend.vercel.app'
})

export const getListUser = async (token, params) => {
  const { page = 0, limit = 9, role = '', q = '' } = params
  let url = `/user?page=${page + 1}&limit=${limit}&role=${role}&q=${q}`
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(url, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const addNewUser = async (token, userInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .post(`/user`, userInfo, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const modifyUser = async (token, userId, updateInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .patch(`/user/${userId}`, updateInfo, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const deleteUser = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .delete(`/user/${userId}`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const getListRequestAccess = async (token, params) => {
  const { page = 0, limit = 9, status = '', q = '' } = params
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/request-access?page=${page + 1}&limit=${limit}&status=${status}&q=${q}`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const updateRequestAccess = async (token, requestId, updateInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .patch(`/request-access/${requestId}`, updateInfo, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const deleteRequestAccess = async (token, requestId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .delete(`/request-access/${requestId}`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const getListAbnormalEvent = async (token, params) => {
  const { page = 0, limit = 9, room = '', type = '' } = params
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/abnormal-event?page=${page + 1}&limit=${limit}&room=${room}&type=${type}`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const updateAbnormalEvent = async (token, eventId, updateInfo) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .patch(`/abnormal-event/${eventId}`, updateInfo, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const getUserDetail = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/user/${userId}`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const getAccessEventsByUID = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/access-event?uid=${userId}`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const getAbnormalEventDetail = async (token, eventId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/abnormal-event/${eventId}`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}

export const getAllRooms = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/room/all`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}
