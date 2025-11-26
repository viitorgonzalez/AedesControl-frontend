import { User } from "@/types/user";
import api from "../api/client";

export const loginService = {
    auth: async (): Promise<User> => {
        const response = await api.post('/login');
        return response.data;
    }
}