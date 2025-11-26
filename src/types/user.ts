import { UUID } from "crypto";

export interface User {
    uu_id: UUID;
    city: string;
    username: string;
    email: string;
    password: string;
    state: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}