import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRODUCTION_SERVER_HOST
})

export default axiosClient
