import axiosInstance from "../api/axios"

export const authService = {
  login(email: string, password: string) {
    return axiosInstance.post("/auth/login", { email, password })
  },

  logout() {
    return axiosInstance.post("/auth/logout")
  }
}
