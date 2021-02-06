import { Product } from "../../models/product";

export enum ProductType {
    CREATE_PRODUCT = 'create_product',
    UPDATE_PRODUCT = 'update_product',
    REMOVE_PRODUCT = 'remove_product',
    CLICK_CREATE_PRODUCT = 'click_create_product',
    CLICK_UPDATE_PRODUCT = 'click_update_product'
}

export interface Action {
    type: string,
    payload: Product
}