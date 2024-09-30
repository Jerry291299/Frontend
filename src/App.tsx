import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import content from "./components/content";
import Admin from "./layout/Admin";
import Dashboard from "./components/admin/Dashboard";
import Add from "./components/admin/add";
import Update from "./components/admin/update";
import Login from "./components/login";
import Register from "./components/register";
import Privaterouter from "./components/privaterouter";
import Detail from "./components/Detail";
import Addcategory from "./components/admin/Category";
import products from "./components/products";
import ProductsPage from "./layout/ProductsPage";
import Products from "./components/products";
import Cart from "./components/cart";


function App() {
  return (
    <> 
    {/* <div className="App"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}>
            <Route path="/" Component={content}></Route>
            <Route path="product/:id" Component={Detail}></Route>
            <Route path="cart/:id" element={<Privaterouter><Cart/></Privaterouter>}></Route>
          </Route>

          <Route path="/Productspage" Component={ProductsPage}>
          <Route path="Product" Component={products}/>
            
          </Route>

          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>

          

          <Route path="/admin" element={<Privaterouter><Admin/></Privaterouter>}>
            <Route path="dashboard" Component={Dashboard}></Route>
            <Route path="add" Component={Add}></Route>
            <Route path="addcategory" Component={Addcategory}></Route>
            <Route path="dashboard/update/:id" Component={Update}></Route>
            
          </Route>

        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </>
  );
}

export default App;
