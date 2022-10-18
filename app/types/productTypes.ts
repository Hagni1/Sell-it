export interface ProductTypes {
    title: string;
    price: string;
    image: { uri: string | null; cancelled: boolean,base64?: 'string'|null };
    description: string;
    localization: { latitude: number; longitude: number };
    city: string;
    updatedAt?: string;
    id?: string;
}
 