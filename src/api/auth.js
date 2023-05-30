import axiosClient from './axiosClient'

export const signIn = async (params, callback, errorCallback) => {
  try {
    const res = await axiosClient.post('/auth/login', params)
    callback(res.data)
  } catch (err) {
    errorCallback ? errorCallback(err) : null
  }
}

export const signUp = async (params, callback, errorCallback) => {
  try {
    const res = await axiosClient.post('/auth/signup', params)
    callback(res.data)
  } catch (err) {
    errorCallback ? errorCallback(err) : null
  }
}

export const getMe = async (token, callback, errorCallback) => {
  try {
    const configs = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const res = await axiosClient.get('/user/info/me', configs)
    callback(res.data)
  } catch (err) {
    errorCallback ? errorCallback(err) : null
  }
}
