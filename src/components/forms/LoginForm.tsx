"use client"

import { useState, useEffect } from "react"
import { Lock, Mail } from "lucide-react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const hasToken = document.cookie.split("; ").some(c => c.startsWith("token="))
    setIsLoggedIn(hasToken)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Preencha todos os campos")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Digite um e-mail válido")
      return
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres")
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || "E-mail ou senha incorretos")
      } else {
        document.cookie = `token=${data.token}; path=/; max-age=3600`
        setIsLoggedIn(true)
        window.location.href = "/dashboard"
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor")
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0"
    setIsLoggedIn(false)
    window.location.href = "/"
  }

  return (
    <form onSubmit={isLoggedIn ? undefined : handleSubmit} className="space-y-5">
      <h1 className="text-2xl font-semibold text-gray-800 text-center">
        {isLoggedIn ? "Deseja sair?" : "Bem-vindo ao"}{" "}
        <span className="text-amber-500">AedesControl</span>
      </h1>
      <p className="text-gray-500 text-sm text-center mt-1 mb-6">
        {isLoggedIn ? "Clique no botão abaixo para sair da sua conta" : "Acesse sua conta para continuar"}
      </p>
      {!isLoggedIn && (
        <>
          <div>

            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Senha</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
          </div>
        </>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type={isLoggedIn ? "button" : "submit"}
        onClick={isLoggedIn ? handleLogout : undefined}
        disabled={isLoading}
        className={`w-full ${isLoading ? "bg-amber-400" : "bg-amber-500 hover:bg-amber-600"
          } transition text-white py-2.5 rounded-lg font-medium shadow-sm`}
      >
        {isLoading ? "Entrando..." : isLoggedIn ? "Sair" : "Entrar"}
      </button>
    </form>
  )
}
