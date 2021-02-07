import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddProduct from '../addProduct'
import { Product } from '../../models/product'
import { clickCreateProduct, clickUpdateProduct, removeProduct } from '../../store/products/action'
import { ProductsState } from '../../store/products/reducers'

import './dashboard.css'

export default function Dashboard() {
    const dispatch = useDispatch()
    const products = useSelector<ProductsState, ProductsState["products"]>((state) => state.products)

    function handleClickUpdate(product: Product) {
        console.log(product)
        dispatch(clickUpdateProduct(product))
    }

    function handleClickCreate(){
        dispatch(clickCreateProduct())
    }

    function handleClickRemove(product: Product){
        console.log(product)
        dispatch(removeProduct(product))
    }

    return (
        <div id="dashboard">
            <div className="title">
                <h2>Lista de Produtos Tec</h2>
                <a href="#modal">
                    <button onClick={handleClickCreate}>Adicionar novo Produto
                    </button>
                </a>
            </div>
            <div id="modal" className="modal">
                <div>
                    <a href="#fechar" title="Fechar" className="fechar">x</a>
                    <AddProduct />
                </div>
            </div>
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