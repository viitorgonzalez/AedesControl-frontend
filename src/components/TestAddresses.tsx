'use client'

import { useState } from 'react';
import { addressService } from '@/lib/services/AddressService';
import { Address } from '@/types/address';

export default function TestAddresses() {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar endereços
    const fetchAddresses = async () => {
        setLoading(true);
        setError(null);

        try {
            console.log('🚀 Fazendo requisição para: http://localhost:8080/addresses');
            const data = await addressService.getAll();
            setAddresses(data);
            console.log('✅ Endereços carregados:', data);
        } catch (err: any) {
            console.error('❌ Erro detalhado:', {
                message: err.message,
                status: err.response?.status,
                statusText: err.response?.statusText,
                data: err.response?.data,
                url: err.config?.url
            });
            setError(`Erro ${err.response?.status || 'desconhecido'}: ${err.response?.data?.message || err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Removido o useEffect - agora só carrega quando clicar no botão

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Teste de Endereços</h1>

            <button
                onClick={fetchAddresses}
                disabled={loading}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
                {loading ? 'Carregando...' : 'Carregar Endereços'}
            </button>

            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    <strong>Erro:</strong> {error}
                </div>
            )}

            <div className="space-y-4">
                {addresses.length === 0 && !loading ? (
                    <p className="text-gray-500">Nenhum endereço encontrado</p>
                ) : (
                    addresses.map((address) => (
                        <div key={address.id} className="p-4 border rounded-lg shadow">
                            <h3 className="font-semibold">{address.street}</h3>
                            <p className="text-gray-600">{address.city} - {address.zipCode}</p>
                            <p className="text-sm">
                                <span className={`px-2 py-1 rounded text-xs ${address.status === 'LIVRE' ? 'bg-green-100 text-green-800' :
                                        address.status === 'SUSPEITA' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                    }`}>
                                    {address.status}
                                </span>
                            </p>
                            {address.latitude && address.longitude && (
                                <p className="text-xs text-gray-500">
                                    Lat: {address.latitude}, Lng: {address.longitude}
                                </p>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}