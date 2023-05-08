import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref<string | null>(localStorage.getItem('si-token'))
  const refreshToken = ref<string | null>(localStorage.getItem('si-refresh-token'))
  const accessTokenExpiresAt = ref<string | null>(localStorage.getItem('si-access-token-expires-at'))

  const isTokenValid = computed(() => parseInt(accessTokenExpiresAt.value ?? '0') > Date.now())

  function setToken (token: string): void {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function setRefreshToken (token: string): void {
    refreshToken.value = token
    localStorage.setItem('si-refresh-token', token)
  }

  function setAccessTokenExpiresAt (time: number): void {
    accessTokenExpiresAt.value = time.toString()
    localStorage.setItem('si-access-token-expires-at', time.toString())
  }

  function login (payload: ILoginRequest): Promise<void> {
    return authService.login(payload)
      .then((res: { access_token: string; refresh_token: string; expires_in: number }) => {
        setToken(res.access_token)
        setRefreshToken(res.refresh_token)
        setAccessTokenExpiresAt(Date.now() + res.expires_in * 1000)
      })
  }

  function register (payload: IRegisterRequest): Promise<void> {
    return authService.register(payload)
  }

  function logout (): void {
    localStorage.removeItem('si-token')
    localStorage.removeItem('si-refresh-token')
    localStorage.removeItem('si-access-token-expires-at')
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    accessToken,
    refreshToken,
    accessTokenExpiresAt,
    isTokenValid,
    setToken,
    setRefreshToken,
    setAccessTokenExpiresAt,
    login,
    register,
    logout
  }
})
