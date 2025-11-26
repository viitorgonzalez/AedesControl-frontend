import axiosInstance from "../api/axios"
import { jwtDecode } from "jwt-decode"

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  expiresIn: number
}

const TOKEN_KEY = "token"

export const loginService = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await axiosInstance.post<LoginResponse>("/auth/login", data)
    console.log("Token recebido do backend:", response.data)

    const token = response.data.accessToken
    if (!token) throw new Error("Token não encontrado")

    localStorage.setItem(TOKEN_KEY, token)
    return response.data;
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY)
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY)
  },

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && this.isTokenValid(token);
  },

  isTokenValid(token: string) {
    try {
      const { exp } = jwtDecode<{ exp: number }>(token)
      return Date.now() < exp * 1000
    } catch {
      return false
    }
  }
}