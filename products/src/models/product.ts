export interface Product {
    id: number;
    name: string;
    price: number;
    quantidad: number;
    description: string;
}

export function initProduct(): Product{
    return {
        id: -1,
        name: '',
        price: 0.0,
        quantidad: 0,
        description: ''
    }
}