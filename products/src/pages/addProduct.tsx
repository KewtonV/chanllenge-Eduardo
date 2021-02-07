import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiX } from 'react-icons/fi'

import { Product } from '../models/product'
import InputComponent from '../components/input'

import { createProduct, updateProduct } from '../store/products/action'
import { ProductsState } from '../store/products/reducers'

import '../styles/pages/addProduct.css'

const regexOnlyNumbers = /^[0-9]+$/
const regexOnlyNumberFloat = /^([0-9]*\.)?[0-9]+$/

export default function AddProduct() {
    const dispatch = useDispatch()
    const productForm = useSelector<ProductsState, ProductsState["productForm"]>((state) => state.productForm)
    const [id, setId] = useState(productForm.id)
    const [name, setName] = useState(productForm.name)
    const [price, setPrice] = useState(productForm.price.toString())
    const [quantidad, setQuantidad] = useState(productForm.quantidad.toString())

    if(id !== productForm.id){
        console.log(`alterou: ${productForm.id}`)
        setId(productForm.id)
        setName(productForm.name)
        setPrice(productForm.price.toString())
        setQuantidad(productForm.quantidad.toString())
    }

    function onChangeQuantidad(value: string) {
        if(value.match(regexOnlyNumbers)){
            if(value[0] === '0' && value.length > 1){
                setQuantidad(value[1])
            } else {
                setQuantidad(value)
            }
        } else if(value.length === 0) {
            setQuantidad('0')
        }
    }

    function onChangePrice(value: string) {
        if(value.match(regexOnlyNumberFloat)) {
            if(value[0] === '0' && value[1] !== '.'){
                setPrice(value[1])
            } else {
                setPrice(value)
            }
        } else if(value.length === 0) {
            setPrice('0')
        }
    }

    function resetProduct(){
        setName('')
        setPrice('0')
        setQuantidad('0')
    }

    function handleClickSave() {
        try {
            if(name === ''){
                return alert("Nome não inserido.")
            }

            const product: Product = {
                id,
                name,
                price: parseFloat(price) || 0.0,
                quantidad: parseInt(quantidad) || 0
            }
            if(product.price < 0) {
                return alert("Preço inválido.")
            }
            if(product.quantidad < 0) {
                return alert("Quantidade inválida.")
            }

            if(id === -1){
                dispatch(createProduct(product))
            } else {
                dispatch(updateProduct(product))
            }
            resetProduct()
            window.location.href ='/#Fechar'
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div id="modal" className="modal">
            <div>
                <a href="#fechar" title="Fechar" className="fechar">
                    <FiX color="#FFFFFF" size={20} />
                </a>
                <div id="add-product">
                    <h2>{id === -1? 'Adicionar novo' : 'Atualizar'} produto</h2>
                    <InputComponent label="Nome" value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setName(event.target.value)
                            } />
                    <InputComponent label="Preço" value={price} type='number'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            onChangePrice(event.target.value)
                        } />
                    <InputComponent label="Quantidade" value={quantidad} type='number'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            onChangeQuantidad(event.target.value)
                        } />
                    <div className="action">
                        <a href="#Fechar">
                            <button className="cancel">Cancelar</button>
                        </a>
                        <button className="save"
                                onClick={handleClickSave}
                        >Salvar</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}