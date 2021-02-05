import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Dashboard from './pages/dashboard'
import AddProduct from './pages/addProduct'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashboard} />
            <Route path="/adicionar" exact component={AddProduct} />
            <Redirect to="/" />
        </BrowserRouter>
    )
}