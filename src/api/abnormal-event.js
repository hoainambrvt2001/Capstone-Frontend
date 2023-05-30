import axiosClient from './axiosClient'

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
    .catch(e => console.error(e))
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
    .catch(e => console.error(e))
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
    .catch(e => console.error(e))
}
