import { createStore } from 'redux'
import { productsReducer } from './products/reducers'

export const Store = createStore(productsReducer)