import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Main from './pages/Main';
import Edit from './pages/Edit';
import Edit_fin from './pages/Edit_fin';
import NaverLogin from './pages/NaverLogin';
import Signup_fin from './pages/Signup_Fin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <GoogleOAuthProvider clientid="419665409571-6h6mujujjnph07kkgpq4q3oicpb1efsf.apps.googleusercontent.com">
    
    </GoogleOAuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/mypage" element={<Mypage />}/>
        <Route path="/main" element={<Main />} />
        <Route path="/edit" element={<Edit />}/>
        <Route path="/edit_fin" element={<Edit_fin />}/>
        <Route path="/naverLogin" element={<NaverLogin/>}/>
        <Route path="/signup_fin" element={<Signup_fin/>}/>
      </Routes>  
    </BrowserRouter>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
