import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import '../CSS/Edit.css';

import Home from '../pages/Home';
import MyPage from '../pages/Mypage';
import Main from '../pages/Main';
import Edit_fin from '../pages/Edit_fin';

import logo from '..//Pictures/Logo.png';

const Edit = () => {

    const [extraInputs, setExtraInputs] = useState([]);

    const addInputs = () => {
        setExtraInputs([...extraInputs, '', '']);
    };

    const handleInputChange = (index, event) => {
        const newInputs = extraInputs.map((input, i) => (i === index ? event.target.value : input));
        setExtraInputs(newInputs);
    };

    return (
        <div className="wrapper_edit">
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

            <div className='edit_middle_contents'>
                <div className = "edit_insert_title">
                    <h4 className='edit_insert_title_1'>Q. 자소서명</h4>
                    <input type="text" placeholder="내용을 입력하세요 Ex) 대한항공 지원서" className = "insert_title"/>
                </div>
                <div className = "edit_insert_question">
                    <h4>Q. 자소서 문항을 입력하세요</h4>
                    <input type="text" placeholder="내용을 입력하세요." className = "insert_question"/>
                </div>
                <div className = "edit_insert_story">
                    <h4>Q. 자소서 문항 내용을 입력하세요 (4000자 이내)</h4>
                    <input type="text" placeholder="내용을 입력하세요." className = "insert_story"/>
                </div>

                <div className='will_plus'>
                    {extraInputs.map((input, index) => (
                            <div key={index}>
                                <h4>Q. 자소서 문항을 입력하세요</h4>
                                <input 
                                    type="text" 
                                    value={input}
                                    onChange={(event) => handleInputChange(index, event)}
                                    placeholder={`내용을 입력하세요.`}
                                    className={`insert_question}`}
                                />
                            </div>
                    ))}

                </div>

                <div className='button_page'>
                    <button className='plus_btn' onClick={addInputs}>
                        <span className="plus_text">+</span>
                    </button>
                    
                    <Link className='edit_btn' to='/edit_fin'>
                        <button className='exe_edit'>첨삭하기</button>
                    </Link>
                    <Routes>
                        <Route path='/edit_fin' element={<Edit_fin />}/>
                    </Routes>
                </div>
            </div>

        </div>
    );
};

export default Edit;