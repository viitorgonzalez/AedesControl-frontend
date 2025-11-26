import type { JSX } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function PrivateRoute({ children }: { children: JSX.Element }) {
    const { loggedIn } = useAuth()
    return loggedIn ? children : <Navigate to="/login" replace />
}
