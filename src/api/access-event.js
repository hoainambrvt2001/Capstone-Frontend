import axiosClient from './axiosClient'

export const getAccessEventsByUID = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return await axiosClient
    .get(`/access-event?uid=${userId}`, config)
    .then(res => res.data)
    .catch(e => console.error(e))
}
