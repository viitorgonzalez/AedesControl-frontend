"use client"

import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const hasToken = document.cookie.split("; ").some(c => c.startsWith("token="));
        setIsLoggedIn(hasToken);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 mb-4 flex items-center justify-between z-50">
            <Link href="/" className="text-2xl font-bold text-amber-500">AedesControl</Link>

            <div className="flex items-center gap-6 text-gray-700 font-medium">
                <Link href="/#sobre" className="hover:text-amber-500 transition">Sobre</Link>
                <Link href="/#contato" className="hover:text-amber-500 transition">Contato</Link>
            </div>

            <div className="flex items-center gap-4">
                {isLoggedIn ? (
                    <button
                        onClick={() => setIsLoggedIn(false)}
                        title="Sair"
                    >
                        <LogOut className="w-6 h-6 text-gray-700 hover:text-red-500 transition cursor-pointer" />
                    </button>
                ) : (
                    <Link href={"/login"} title="Entrar">
                        <LogIn className="w-6 h-6 text-gray-700 hover:text-amber-500 transition cursor-pointer" />
                    </Link>
                )}
            </div>
        </header>
    );
}