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


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}>
            <Route path="/" Component={content}></Route>
          </Route>

          <Route path="/admin" Component={Admin}>
            <Route path="dashboard" Component={Dashboard}></Route>
            <Route path="add" Component={Add}></Route>
            <Route path="dashboard/update/:id" Component={Update}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
