import axiosClient from './axiosClient'

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
    .catch(e => console.error(e))
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
    .catch(e => console.error(e))
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
    .catch(e => console.error(e))
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
    .catch(e => console.error(e))
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
    .catch(e => console.error(e))
}
