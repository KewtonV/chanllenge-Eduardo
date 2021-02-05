export interface Product {
    id: number;
    name: string;
    price: number;
    quantidad: number
}

export function initProduct(): Product{
    return {
        id: -1,
        name: '',
        price: 0.0,
        quantidad: 0
    }
}