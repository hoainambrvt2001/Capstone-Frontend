import axios from 'axios'
import { useAuth } from 'src/hooks/useAuth'

const auth = useAuth()

export const axiosClient = axios.create({
  baseURL: 'http://localhost:3333'
})

const getListRequestAccess = () => {
  const user = auth.user.token
}
