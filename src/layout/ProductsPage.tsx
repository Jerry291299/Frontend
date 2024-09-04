import React from 'react'
import Header from '../components/header'

import Footer from '../components/footer'
import Sidebarproducts from '../components/Sidebarproducts'
import { Outlet } from 'react-router-dom'
import Products from '../components/products'

type Props = {}

const ProductsPage = (props: Props) => {
    return (
        <>
        <Header/>
        <div className="flex gap-2">
        <Sidebarproducts/>
        <Outlet/>
        </div>
        
        <Footer/>
        </>
      )
}

export default ProductsPage