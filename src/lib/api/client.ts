import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', 
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, 
});

api.interceptors.request.use(
    (config) => {
        console.log('Enviando requisição:', config.method?.toUpperCase(), config.url);

        // Aqui você pode adicionar token de autenticação no futuro
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }

        return config;
    },
    (error) => {
        console.error('Erro na requisição:', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log('Resposta recebida:', response.status, response.data);
        return response;
    },
    (error) => {
        console.error('Erro na resposta:', error.response?.status, error.response?.data);

        if (error.response?.status === 401) {
            console.log('Não autorizado - redirecionando para login');
        }

        if (error.response?.status === 500) {
            console.error('Erro interno do servidor');
        }

        return Promise.reject(error);
    }
);

export default api;