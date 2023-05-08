class AuthService {
  login (payload: ILoginRequest) {
    return useHttp.post('auth/v1/token?grant_type=password', payload)
  }

  register (payload: ILoginRequest) {
    return useHttp.post('auth/v1/signup', payload)
  }

  refreshToken (refreshToken: string) {
    return useHttp.post('auth/v1/token?grant_type=refresh_token', { refresh_token: refreshToken })
  }
}

export const authService = new AuthService()
