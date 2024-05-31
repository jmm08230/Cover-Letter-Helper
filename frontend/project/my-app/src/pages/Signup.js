import React from 'react';
import axios from 'axios';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Routes, Route, Link} from "react-router-dom";
import Home from '../pages/Home';
import '../CSS/Signup.css';

const Signup = () => {
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_check, setPassword_Check] = useState();
  const [tel_num, setTel_Num] = useState();
  const [birth, setBirth] = useState();

  const register = () => {
    axios
    .post('http://localhost/4000', { //Server 주소
    id: id,
    password: password,
    tel_num: tel_num,
    email: email,
    birth: birth,
    })
    .then((response) => { //Server에 등록 성공시
      //Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
    })
    .catch ((error) => {
      //Handle Error.
      console.log("An error occurred:", error.response);
    });
  }

  const navigate = new useNavigate(); 

    return (
        <div className="wrapper">
            <div className="container_signup">
            <div className="sign-in-container">
            <form 
            // 가입하기 버튼 눌렸을 때 실행될 녀석들
              onSubmit={async (e)=>{
              e.preventDefault();
              
              const data = await axios({
                url: "http://localhost:4000", // url: 서버의 주소
                method: "POST",
                data: {
                  id,
                  password,
                  password_check,
                  tel_num,
                  email,
                  birth
                  
                },
              });

              
              
              navigate('/signup_fin');
              console.log({id, password, password_check, tel_num, email, birth})
              console.log(data);
            }}>
              <div className='input-form'>
              <h1 className='signup_text'>
                회원 가입
              </h1>
              <a className='signup_small_text'>
                Correct your instruction today!
              </a>
              </div>
                  <div className = "insert_id_1">
                    <input 
                      type="text" 
                      placeholder="아이디" 
                      id = "insert id" 
                      value={id}
                      onChange={(e)=> {
                        setId(e.target.value)
                      }}/>
                  </div>
                  <div className = "insert pw_1">
                    <input 
                      type="password" 
                      placeholder="비밀번호" 
                      id = "insert id" 
                      value={password}
                      onChange={(e)=> {
                        setPassword(e.target.value)
                      }}/>
                  </div>
                  <div className = "insert pw check_1">
                    <input 
                      type="password" 
                      placeholder="비밀번호 확인" 
                      id = "insert id" 
                      value={password_check}
                      onChange={(e)=> {
                        setPassword_Check(e.target.value)
                      }}/>
                  </div>
                  <div className = "insert tel_1">
                    <input 
                      type="text" 
                      placeholder="전화번호 ex. 010-0000-0000" 
                      id = "insert id" 
                      value={tel_num}
                      onChange={(e)=> {
                        setTel_Num(e.target.value)
                      }}/>
                  </div>
                  <div className = "insert email_1">
                    <input 
                      type="email" 
                      placeholder="이메일" 
                      id = "insert id" 
                      value={email}
                      onChange={(e)=> {
                        setEmail(e.target.value)
                      }}/>
                  </div>
                  <div className = "insert birth_1">
                    <input type="text" 
                      placeholder="생년월일" 
                      id = "insert id" 
                      value={birth}
                      onChange={(e)=> {
                        setBirth(e.target.value)
                      }}/>
                  </div>
                <div className='asd'>
                  <button type='submit' className="form_btn">
                    가입하기
                  </button>
                </div>


                <div className='hr-container_1'>
                <hr className="custom-hr1_1"/>
                <span className="hr-sect_1">Or With</span>
                <hr className="custom-hr2_1"/>
                </div>
                <button className = "social-btn-G_1">
                    <span className = "social-logo-wrapper-G_1">
                      <img src = "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" class = 'social-logo'/>
                      <span className="social-text-G_1">
                        구글로 가입하기
                      </span>
                    </span>
                </button>
                <div className='question_1'>
                  <Link to="/" className='Home-text_1'>로그인</Link>
                  <a className='AreYou'>이미 계정이 있으신가요?</a>
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
          </form>
          
            </div>
          
        </div>

            </div>

    );
};

export default Signup;