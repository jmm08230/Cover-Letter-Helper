import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";
import {GoogleLogin} from '@react-oauth/google';

import '../CSS/Home.css';

import img from '../Pictures/img.png';
import naver from '../Pictures/Naver.png';
import hi from '../Pictures/hi.png';

import Signup from "./Signup";
import Main from "./Main";
import NaverLogin from './NaverLogin';


/*
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
*/

const Home = () => {

  


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
                <input type="text" placeholder="Enter Your ID" id = "insert id"/>
              </div>

              <label for = "insert pw" className = 'subscript_pw'>Password</label>

              <div className = "insert pw">
            <input type="password" placeholder="Enter Your Password" id = "insert pw"/>
              </div>
            <div className='asd'>
              <button className="form_btn">
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
              <Link to="/main">메인페이지</Link>
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