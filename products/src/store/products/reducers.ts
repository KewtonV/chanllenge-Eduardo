import { initProduct, Product } from "../../models/product";
import { ProductType, Action } from "./types";

export interface ProductsState {
    id: number,
    productForm: Product,
    products: Product[]
}

const initialState = {
    id: 1,
    productForm: initProduct(),
    products: [
        {
            id: 0,
            name: 'Notebook LG',
            price: 2299.99,
            quantidad: 2,
            description: ''
        }
    ]
}

export const productsReducer = (state: ProductsState = initialState, action: Action):ProductsState => {
    switch(action.type){
        case ProductType.CREATE_PRODUCT: {
            const product = action.payload
            product.id = state.id
            console.log(product)
            return {
                ...state,
                id: state.id + 1,
                productForm: initProduct(),
                products: [...state.products, product]
            }
        }
        case ProductType.UPDATE_PRODUCT: {
            const products = state.products.map(item =>
                item.id === action.payload.id ? action.payload : item)
            return {
                ...state,
                productForm: initProduct(),
                products: [...products]
            }
        }
        case ProductType.REMOVE_PRODUCT: {
            const productIndex = state.products.findIndex((item) => item.id === action.payload.id)
            state.products.splice(productIndex, 1)
            return {
                ...state,
                products: [...state.products]
            }
        }
        case ProductType.CLICK_CREATE_PRODUCT: {
            return {
                ...state,
                productForm: action.payload
            }
        }
        case ProductType.CLICK_UPDATE_PRODUCT: {
            return {
                ...state,
                productForm: action.payload
            }
        }
        default: return state
    }
}