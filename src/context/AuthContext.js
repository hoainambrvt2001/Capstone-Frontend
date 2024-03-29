// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import { getMe, signIn, signUp } from 'src/api/auth'

// ** Config
import authConfig from 'src/configs/auth'

// ** Defaults
const defaultProvider = {
  user: null,
  accessToken: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [accessToken, setAccessToken] = useState(defaultProvider.accessToken)
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      setIsInitialized(true)
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      if (storedToken) {
        setLoading(true)
        await getMe(
          storedToken,
          res => {
            setUser({ ...res.data.user, role: 'admin' })
            setAccessToken(storedToken)
          },
          err => {
            console.log(err)
            localStorage.removeItem('userData')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setAccessToken(null)
            router.push('/login')
          }
        )
      }
      setLoading(false)
    }
    initAuth()
  }, [])

  const handleLogin = (params, errorCallback) => {
    signIn(
      {
        email: params.email,
        password: params.password
      },
      res => {
        window.localStorage.setItem(authConfig.storageTokenKeyName, res.data.token)
        window.localStorage.setItem('userData', JSON.stringify({ ...res.data.user, role: 'admin' }))
        setUser({ ...res.data.user, role: 'admin' })
        setAccessToken(res.data.token)
        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      },
      errorCallback
    )
  }

  const handleLogout = () => {
    setUser(null)
    setIsInitialized(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params, errorCallback) => {
    signUp(
      params,
      res => {
        window.localStorage.setItem(authConfig.storageTokenKeyName, res.data.token)
        window.localStorage.setItem('userData', JSON.stringify({ ...res.data.user, role: 'admin' }))
        setUser({ ...res.data.user, role: 'admin' })
        setAccessToken(res.data.token)
        const returnUrl = router.query.returnUrl
        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
      },
      errorCallback
    )
  }

  const values = {
    user,
    accessToken,
    loading,
    setUser,
    setLoading,
    isInitialized,
    setIsInitialized,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
