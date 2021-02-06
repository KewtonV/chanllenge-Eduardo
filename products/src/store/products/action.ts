import { initProduct, Product } from "../../models/product";
import { ProductType, Action } from "./types";

export function createProduct(product: Product): Action {
    return {
        type: ProductType.CREATE_PRODUCT,
        payload: product
    }
}

export function updateProduct(product: Product): Action {
    return {
        type: ProductType.UPDATE_PRODUCT,
        payload: product
    }
}

export function removeProduct(product: Product): Action {
    return {
        type: ProductType.REMOVE_PRODUCT,
        payload: product
    }
}

export function clickCreateProduct(): Action {
    return {
        type: ProductType.CLICK_CREATE_PRODUCT,
        payload: initProduct()
    }
}

export function clickUpdateProduct(product: Product): Action {
    return {
        type: ProductType.CLICK_UPDATE_PRODUCT,
        payload: product
    }
}
