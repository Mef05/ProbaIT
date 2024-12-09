import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, } from "react-router";
import Header from './Header';

import './Style.css'
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot_pass';
import AddRecipie from './Add_recipie';
import Profile from './Profile';
import Search from './Search';
import Home from './Home';


const root = document.getElementById("root");

const user = 'login';

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header userState={user} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpass" element={<Forgot />} />
      <Route path="/profile" element={<Profile name='Name' email='email' telephone='telephone' collegeGroup='collegeGroup' />} />
      <Route path="/add_recipe" element={<AddRecipie />} />
      <Route path='/search' element={<Search />} />

    </Routes>
  </BrowserRouter>
);
