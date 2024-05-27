import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import RegisterPage from "RegisterPage";
import ContactPage from "./pages/Contact/ContactPage";
import StartPage from "./pages/Start/StartPage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          Start
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Register'>
          About
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/contact'>
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<StartPage />} />
        <Route path='/Register' element={<RegisterPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}