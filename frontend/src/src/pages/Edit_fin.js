import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import '../CSS/Edit_fin.css';

import Home from '../pages/Home';
import MyPage from '../pages/Mypage';
import Main from '../pages/Main';
import Edit from '../pages/Edit';

import logo from '..//Pictures/Logo.png';

import star0 from '../Pictures/Edit_Fin/0점.png'
import star1 from '../Pictures/Edit_Fin/1점.png'
import star2 from '../Pictures/Edit_Fin/2점.png'
import star3 from '../Pictures/Edit_Fin/3점.png'
import star4 from '../Pictures/Edit_Fin/4점.png'
import star5 from '../Pictures/Edit_Fin/5점.png'

const Edit_fin = () => {
    return (
        <div className="wrapper_edit_fin">
            <div className='top_menu'>
                <div className='s_menu'>
                        <nav className='top_menu2'>
                            <Link to='/mypage'>마이 페이지</Link>
                            <Link to=''>합격 자소서</Link>
                            <Link to='/edit'>첨삭하기</Link>
                            <Link to='/main'>Home</Link>
                        </nav>
                </div>
                <Link to='/main'>
                    <img className='logo_img' src={logo} />
                </Link>
                <Routes>
                    <Route path='/main' element={<Main />}/>
                    <Route path='/mypage' element={<MyPage />}/>
                    <Route path='/edit' element={<Edit />}/>
                    <Route path='/edit_fin' element={<Edit_fin />}/>
                </Routes>
            </div>
            
            <div className='edit_fin_middle_contents'>
                <div className='star_point'>
                    <img src={star3}/>
                </div>

                <div className='Edit_Data'>
                    <h1>Q.</h1>
                    <span>입력된 질문 불러오기</span>
                    <input type="text" placeholder="내용을 입력하세요." className = "cl_input"/>
                    <input type="text" placeholder="내용을 입력하세요." className = "cl_output"/>
                </div>

                <div className='Edit_Data_2'>
                    <h1>Q.</h1>
                    <span>입력된 질문 불러오기</span>
                    <input type="text" placeholder="내용을 입력하세요." className = "cl_input_2"/>
                    <input type="text" placeholder="내용을 입력하세요." className = "cl_output_2"/>
                </div>

                <Link className='re_edit' to='/edit'>
                        <button className='re_edit_btn' Onclick='window.location.reload()'>다시 첨삭하기</button>
                </Link>

            </div>

        </div>
    );
};

export default Edit_fin;