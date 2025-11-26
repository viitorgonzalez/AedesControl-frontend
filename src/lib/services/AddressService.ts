import api from '@/lib/api/client';
import { Address, CreateAddressDTO, UpdateAddressDTO } from '@/types/address';

export const addressService = {
    // GET /api/addresses - Buscar todos os endereços
    getAll: async (): Promise<Address[]> => {
        const response = await api.get('/addresses');
        return response.data;
    },

    // GET /api/addresses/{id} - Buscar por ID
    getById: async (id: number): Promise<Address> => {
        const response = await api.get(`/addresses/${id}`);
        return response.data;
    },

    // POST /api/addresses - Criar novo endereço
    create: async (data: CreateAddressDTO): Promise<Address> => {
        const response = await api.post('/addresses', data);
        return response.data;
    },

    // PUT /api/addresses/{id} - Atualizar endereço
    update: async (id: number, data: UpdateAddressDTO): Promise<Address> => {
        const response = await api.put(`/addresses/${id}`, data);
        return response.data;
    },

    // DELETE /api/addresses/{id} - Deletar endereço
    delete: async (id: number): Promise<void> => {
        await api.delete(`/addresses/${id}`);
    },

    // GET /api/addresses/status/{status} - Buscar por status (exemplo de filtro)
    getByStatus: async (status: string): Promise<Address[]> => {
        const response = await api.get(`/addresses/status/${status}`);
        return response.data;
    }
};