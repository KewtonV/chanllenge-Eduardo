import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../models/product'
import { clickUpdateProduct, removeProduct } from '../../store/products/action'

import { ProductsState } from '../../store/products/reducers'

import './dashboard.css'

export default function Dashboard() {
    const dispatch = useDispatch()
    const products = useSelector<ProductsState, ProductsState["products"]>((state) => state.products)

    function handleClickUpdate(product: Product) {
        console.log(product)
        dispatch(clickUpdateProduct(product))
    }

    function handleClickRemove(product: Product){
        console.log(product)
        dispatch(removeProduct(product))
    }

    return (
        <div id="dashboard">
            <h1>Lista de Produtos Tec</h1>
            <table>
                <thead>
                <tr>
                    <th>Produtos</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                { products.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantidad}</td>
                            <td>
                                <button onClick={() => handleClickUpdate(item)}>Atualizar</button>
                                <button onClick={() => handleClickRemove(item)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
} 