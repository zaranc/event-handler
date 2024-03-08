import React from 'react'
import ForgotPassword from './login-pages/ForgetPassword'
import Signup from './login-pages/Signup'
import { Routes, Route } from "react-router-dom";
import Login from './login-pages/Login';
import Product from './Products/Product';
import Addproduct from './Products/Addproduct';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ForgotPassword/*" element={<ForgotPassword />} />
        <Route path="/SignUp/*" element={<Signup />} />
        <Route path="/Addproduct" element={<Addproduct />} />
      </Routes>
    </>
  )
}

export default App