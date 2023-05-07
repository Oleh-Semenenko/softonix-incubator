import axios from 'axios'
// import { routeNames, router } from '@/router'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  config => {
    const { accessToken } = useAuthStore()

    if (accessToken) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${accessToken}`
      }
    }

    return config
  }
)

instance.interceptors.response.use(
  res => {
    console.log(res)
    return res.data
  },
  async error => {
    const {
      refreshToken, setToken,
      setRefreshToken, setAccessTokenExpiresAt, logout
    } = useAuthStore()

    if (!refreshToken) {
      throw new Error('No token')
    }

    if (refreshToken && error.status === 401 && error.config && !error.config.__isRetryRequest) {
      const response = await authService.refreshToken(refreshToken)

      setToken(response.access_token)
      setRefreshToken(response.refresh_token)
      setAccessTokenExpiresAt(response.expires_in)

      return instance.request(error.config)
    }

    if (error.response.status === 401) {
      logout()
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
