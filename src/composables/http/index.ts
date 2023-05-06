import axios from 'axios'
import { routeNames, router } from '@/router'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  (config) => {
    const { accessToken, accessTokenExpiresAt } =
    useAuthStore()

    if (accessToken && accessTokenExpiresAt && Date.now() < parseInt(accessTokenExpiresAt)) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`
      }
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.request.use(
  async (config) => {
    const { accessToken, refreshToken, setRefreshToken, setToken, logout } = useAuthStore()

    if (!accessToken) {
      try {
        if (!refreshToken) {
          throw new Error('There is now refresh token!')
        }

        const res = await authService.refreshToken(refreshToken)

        setRefreshToken(res.refresh_token)
        setToken(res.access_token)
      } catch (err) {
        logout()
      }
      return config
    } else {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`
      }
    }
    console.log(config)
    return config
  }
)

instance.interceptors.request.use(
  config => {
    const { accessToken, refreshToken } = useAuthStore()
    console.log(refreshToken)

    if (accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`,
        apikey: import.meta.env.VITE_API_KEY
      }
    }
    return config
  }
)

instance.interceptors.response.use(
  res => res.data,
  async error => {
    console.log(error)
    const {
      logout
    } = useAuthStore()


    // const {
    //   refreshToken,
    //   logout,
    //   setToken,
    //   setAccessTokenExpiresAt
    // } = useAuthStore()

    if (error.response.status === 401) {
      logout()
    }

    // Если accessToken истек, но refreshToken еще действителен, обновляем accessToken
    // if (refreshToken) {
    //   try {
    //     const response = await authService.refreshToken(refreshToken)
    //     setToken(response.data.access_token)
    //     setAccessTokenExpiresAt(Date.now() + response.data.expires_in * 1000)
    //   } catch (err) {
    //     logout()
    //     router.push(routeNames.login)
    //     return Promise.reject(err)
    //   }
    // }

    return Promise.reject(error)
  }
)

export const useHttp = instance
