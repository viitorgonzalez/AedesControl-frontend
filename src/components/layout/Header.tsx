import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function Header() {
    const { loggedIn, logout } = useAuth()

    return (
        <header className="bg-amber-500 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
                        AedesControl
                    </div>

                    <nav className="hidden md:flex space-x-6 items-center">
                        <Link
                            to="/dashboard"
                            className="hover:text-gray-200 transition-colors"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/profile"
                            className="hover:text-gray-200 transition-colors"
                        >
                            Perfil
                        </Link>

                        {loggedIn ? (
                            <button
                                onClick={logout}
                                className="bg-white text-amber-500 px-3 py-1 rounded-lg font-semibold hover:bg-gray-100 transition"
                            >
                                Sair
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-white text-amber-500 px-3 py-1 rounded-lg font-semibold hover:bg-gray-100 transition"
                            >
                                Entrar
                            </Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}
