import { createContext, useContext, useState, type ReactNode, useEffect } from "react"
import { loginService } from "../services/authService"

interface AuthContextType {
    loggedIn: boolean
    token: string | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {

    const [token, setToken] = useState<string | null>(() => loginService.getToken())
    const loggedIn = !!token

    useEffect(() => {
        const handleStorage = () => setToken(loginService.getToken())
        window.addEventListener("storage", handleStorage)
        return () => window.removeEventListener("storage", handleStorage)
    }, [])

    const login = async (email: string, password: string) => {
        const data = await loginService.login({ email, password })
        setToken(data.accessToken)
    }

    const logout = () => {
        loginService.logout()
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ loggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be used within AuthProvider")
    return context
}
