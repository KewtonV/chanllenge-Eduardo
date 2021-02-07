import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiEdit3, FiTrash2 } from 'react-icons/fi'

import AddProduct from './addProduct'
import { Product } from '../models/product'

import { clickCreateProduct, clickUpdateProduct, removeProduct } from '../store/products/action'
import { ProductsState } from '../store/products/reducers'

import '../styles/pages/dashboard.css'

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

    function notProducts() {
        return (
            <div className="not-products">
                <span>Não há produtos.</span>
            </div>
        )
    }

    function renderItem(item: Product) {
        return (
            <tr key={item.id}>
                <td className="border">{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantidad}</td>
                <td>
                    <a href="#modal">
                        <button className="edit"
                            onClick={() => handleClickUpdate(item)}>
                            <FiEdit3 color="#FFFFFF" />
                        </button>
                    </a>
                    <button className="delete"
                        onClick={() => handleClickRemove(item)}>
                        <FiTrash2 color="#FFFFFF" />
                    </button>
                </td>
            </tr>
        )
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
            <AddProduct />
            <table>
                <thead>
                <tr>
                    <th className="border">Produtos</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                { products.length === 0 ?
                    notProducts() :
                    products.map((item) => renderItem(item))
                }
                </tbody>
            </table>
        </div>
    )
} 