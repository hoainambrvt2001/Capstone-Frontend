import axiosClient from './axiosClient'

const DEFAULT_ROOM_ID = '6413ebf956917f74591468fd'
const DEFAULT_REPORT_MODE = '1m'

export const getAllReports = async (token, roomId = DEFAULT_ROOM_ID) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/analytics/all-reports/${roomId}`, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export const getAbnormalEventReport = async (token, roomId = DEFAULT_ROOM_ID, mode = DEFAULT_REPORT_MODE) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/analytics/abnormal-events/${roomId}?mode=${mode}`, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export const getVisitorsByDayReport = async (token, roomId = DEFAULT_ROOM_ID) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/analytics/visitors-by-day/${roomId}`, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}

export const getRoomReport = async (token, roomId = DEFAULT_ROOM_ID) => {
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

export const getAccessEventsByRoomId = async (token, roomId = DEFAULT_ROOM_ID, page = 0, limit = 9) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/access-event?room=${roomId}&page=${page + 1}&limit=${limit}&sort=time-desc`, config)
    .then(res => res.data)
    .catch(e => console.log(e))
}
