"use client";

import LoginForm from "@/components/forms/LoginForm";
import { Header } from "@/components/layout/Header";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-gray-100 p-4">
            <Header />

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

                <LoginForm />

                <p className="text-center text-xs text-gray-400 mt-8">
                    © 2025 Aedes Control — Todos os direitos reservados
                </p>
            </div>
        </div>
    );
}
