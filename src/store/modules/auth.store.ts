import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref(localStorage.getItem('si-refresh-token'))
  const accessTokenExpiresAt = ref(localStorage.getItem('si-token-expires-at'))

  function setToken (token: string): void {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string): void {
    refreshToken.value = token
    localStorage.setItem('si-refresh-token', token)
  }

  function setAccessTokenExpiresAt (time: number) {
    accessTokenExpiresAt.value = time.toString()
    localStorage.setItem('si-token-expires-at', time.toString())
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
        setAccessTokenExpiresAt(Date.now() + res.expires_in * 1000)
      })
  }

  function register (payload: IRegisterRequest) {
    return authService.register(payload)
  }

  function logout () {
    localStorage.removeItem('si-token')
    localStorage.removeItem('si-refresh-token')
    localStorage.removeItem('si-token-expires-at')
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    accessToken,
    refreshToken,
    setToken,
    setRefreshToken,
    setAccessTokenExpiresAt,
    login,
    register,
    logout
  }
})
