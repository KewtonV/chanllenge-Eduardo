import { Product } from "../../models/product";

export enum ProductType {
    CREATE_PRODUCT = 'create_product',
    UPDATE_PRODUCT = 'update_product',
    REMOVE_PRODUCT = 'remove_product'
}

export interface Action {
    type: string,
    payload: Product
}