import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";
import {GoogleLogin} from '@react-oauth/google';

import '../CSS/Home.css';

import img from '../Pictures/img.png';
import hi from '../Pictures/hi.png';

import Signup from "./Signup";
import Main from "./Main";
import NaverLogin from './NaverLogin';


/*
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
*/

const Home = () => {

  const User = {
    id: 'jmm08230',
    password: 'wjdalstjr28@'
  }

  const navigate = useNavigate();

  const [id, setID] = useState('');
  const [password, setPassword] = useState('');

  const handleId = (e) => {
    setID(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);  
  }

  const onClickConfirmButton = () => {
    if(id === User.id && password === User.password) {
      alert('로그인에 성공했습니다.');
      navigate('/main');
    } else {
      alert('등록되지 않은 회원입니다.');
    }
  }

    return(
      <div className="wrapper">
      <div className="container_home">
      <div className="sign-in-container">
        <form>
          <div className='input-form'>
            <h1 className='hi_text'>
              안녕하세요
              <img src={hi} className='hi_img' width = '20px'/>
            </h1>
            
          </div>
          <label for = "insert id" className = 'subscript_id'>ID</label>
              <div className = "insert id">
                <input
                 type="text"
                 placeholder="Enter Your ID" 
                 id = "insert id"
                 value={id}
                 onChange={handleId}/>
              </div>

              <label for = "insert pw" className = 'subscript_pw'>Password</label>

              <div className = "insert pw">
            <input
             type="password"
             placeholder="Enter Your Password"
             id = "insert pw"
             value={password}
             onChange={handlePassword}/>
              </div>

            <div className='asd'>
              <button 
              className="form_btn"
              
              onClick={onClickConfirmButton}
              >
                로그인
              </button>
            </div>
            <div className='hr-container'>
            <hr className="custom-hr1"/>
            <span className="hr-sect">Or With</span>
            <hr className="custom-hr2"/>
            <div className="social-links">

              <div className="social-btn-G">
              <GoogleOAuthProvider clientId="419665409571-6h6mujujjnph07kkgpq4q3oicpb1efsf.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>
              </div>

              <div className="N_login">
                <NaverLogin />
              </div>
              
            </div>
            <div className='question'>
              <Link to="/signup" className='Register-text'>회원가입</Link>
              <a className='No_Id'>계정이 없으신가요?</a>
              <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/main" element={<Main />} />
              </Routes>
            </div>
          </div>
      </form>
      
        </div>
      
    </div>
    <img src={img} className='left-pic'/>
    
  </div> //wrapper의 div 닫기
    );
};

export default Home;