import React from "react";

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';

//Home, Register, MyPage, 자소서Page, 첨삭Page

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mypage' element={<Mypage />} />
      </Routes>
  );
      
};

export default App;
