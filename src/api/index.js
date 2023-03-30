import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'http://localhost:3333'
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
  console.log(q)
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
