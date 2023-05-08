import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  config => {
    const { accessToken, isTokenValid } = useAuthStore()

    if (accessToken && isTokenValid) {
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
    return res.data
  },
  async error => {
    const {
      refreshToken, setToken,
      setRefreshToken, setAccessTokenExpiresAt, logout
    } = useAuthStore()

    if (!refreshToken) {
      errorNotification('This is no valid email or password')
    }

    if (refreshToken && error.status === 401 && error.config && !error.config.__isRetryRequest) {
      const response = await authService.refreshToken(refreshToken)

      setToken(response.access_token)
      setRefreshToken(response.refresh_token)
      setAccessTokenExpiresAt(Date.now() + response.expires_in * 1000)

      return instance.request(error.config)
    }

    if (error.response.status === 401) {
      logout()
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
