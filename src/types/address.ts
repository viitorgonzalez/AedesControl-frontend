export enum AddressStatus {
  LIVRE = 'LIVRE',
  SUSPEITA = 'SUSPEITA',
  CONFIRMADO = 'CONFIRMADO'
}

export interface Address {
  id: number;
  street: string;
  city: string;
  zipCode: string;
  status: AddressStatus;
  latitude: number | null;
  longitude: number | null;
  createdAt: string; 
  updatedAt: string; 
}

export interface CreateAddressDTO {
  street: string;
  city: string;
  zipCode: string;
  status: AddressStatus;
  latitude?: number | null;
  longitude?: number | null;
}

export interface UpdateAddressDTO {
  id: number;
  street?: string;
  city?: string;
  zipCode?: string;
  status?: AddressStatus;
  latitude?: number | null;
  longitude?: number | null;
}
