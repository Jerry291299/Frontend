import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import content from "./components/content";
import Admin from "./layout/Admin";
import Dashboard from "./components/admin/Dashboard";
import Add from "./components/admin/add";
import update from "./components/admin/update";
import success from "./components/admin/success";

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
            <Route path="dashboard/update/:id" Component={update}></Route>
            <Route path="success" Component={success}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
