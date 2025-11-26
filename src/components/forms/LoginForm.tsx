import React, { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock } from "react-icons/ai"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!email || !password) 
            return setError("Preencha todos os campos")

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email))
            return setError("Email inválido")

        setLoading(true)
        try {
            await login(email, password)
            navigate("/dashboard")
        } catch (err: any) {
            setError("Falha ao entrar. Verifique suas credenciais.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">
            <h2 className="text-3xl font-bold text-amber-500 text-center mb-8">
                AedesControl
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {error && <p className="text-red-500 text-center">{error}</p>}
                <div className="flex flex-col relative">
                    <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                        Email
                    </label>
                    <div className="relative">
                        <AiOutlineMail className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="email"
                            id="email"
                            placeholder="seuemail@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black placeholder-gray-400 transition"
                        />
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="password" className="mb-1 font-medium text-gray-700">
                        Senha
                    </label>
                    <div className="relative">
                        <AiOutlineLock className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-black placeholder-gray-400 transition"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
                >
                    {loading ? "Entrando..." : "Entrar"}
                </button>
            </form>
        </div>
    )
}
