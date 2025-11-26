import { createContext, useContext, useState, type ReactNode } from "react"
import { authService } from "../services/authService"

interface AuthContextType {
  loggedIn: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = async (email: string, password: string) => {
    await authService.login(email, password)
    setLoggedIn(true)
  }

  const logout = async () => {
    await authService.logout()
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
