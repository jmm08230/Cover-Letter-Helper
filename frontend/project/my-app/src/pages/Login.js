import React from "react";

import '../CSS/Home.css';
import { Routes, Route, Link} from "react-router-dom";

import img from '../Pictures/img.png'
import naver from '../Pictures/Naver.png'
import hi from '../Pictures/hi.png'

import Register from "./Register";
import Register_Fin from "./Register_Fin";

function Login() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
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
                      <button className = "social-btn-G">
                        <span className = "social-logo-wrapper-G">
                          <img src = "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" class = 'social-logo'/>
                          <span className="social-text-G">Google 아이디로 로그인</span>
                        </span>
                      </button>
                      <button className = "social-btn-N">
                        <span className = "social-logo-wrapper-N">
                          <img src = {naver} class = 'social-logo'/>
                          <span className="social-text-N">네이버 로그인</span>
                        </span>
                      </button>
                    </div>
                <div className='question'>
                  <Link to="/Register" className='Register-text' href='/Register'>회원가입</Link>
                  <Link to="/Register_Fin" className='Register-text' href='/Register_Fin'>회원가입완료</Link>
                  <a>계정이 없으신가요?</a>
                  <Routes>
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Register_Fin" element={<Register_Fin />} />
                  </Routes>
                </div>
              </div>
          </form>
          
            </div>
          
        </div>
      <div class='Login_logo'>
        <img src={img} className='left-pic'/>
        </div>
      </div>
    </div>
  );
}

export default Login;
