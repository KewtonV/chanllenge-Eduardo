import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../models/product'

import './dashboard.css'

const data:Product[] = [
    {
        id: 0,
        name: 'Notebook LG',
        price: 2299.99,
        quantidad: 2
    },
    {
        id: 1,
        name: 'Notebook LG',
        price: 2299.99,
        quantidad: 2
    },
    {
        id: 2,
        name: 'Notebook LG',
        price: 2299.99,
        quantidad: 2
    },
    {
        id: 3,
        name: 'Notebook LG',
        price: 2299.99,
        quantidad: 2
    }
]

export default function Dashboard() {
    const [filter, setFilter] = useState('')

    return (
        <div id="dashboard">
            <h1>Lista de Produtos Tec</h1>
            <div className="actions">
                <input value={filter} onChange={(event) => setFilter(event.target.value) } />
                <Link to="/adicionar">Adicionar Produto</Link>
            </div>
            <table>
                <tr>
                    <th>Produtos</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
                { data.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantidad}</td>
                            <td>Test</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
} 