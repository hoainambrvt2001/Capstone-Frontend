import axiosClient from './axiosClient'

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
    .catch(e => console.error(e))
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
    .catch(e => console.error(e))
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
    .catch(e => console.error(e))
}
