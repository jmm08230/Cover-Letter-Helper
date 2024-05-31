import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import axios from 'axios';

import '../CSS/Edit.css';

import Home from '../pages/Home';
import MyPage from '../pages/Mypage';
import Main from '../pages/Main';
import Edit_fin from '../pages/Edit_fin';

import logo from '..//Pictures/Logo.png';


const Edit = () => {

    const [extraInputs, setExtraInputs] = useState([]);

    const [data_1, setdata_1] = useState();
    const [data_2, setdata_2] = useState();
    const [data_3, setdata_3] = useState();
    const [data_4, setdata_4] = useState();
    const [data_5, setdata_5] = useState();
    const [data_6, setdata_6] = useState();

    const navigate = new useNavigate(); 

    const addInputs = (event) => {
        event.preventDefault();
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
        
        <form onSubmit={async (e)=>{
            //submit이 작동하기는 함
            const SERVER_URL = "http://localhost:5000";
              e.preventDefault();
              try {
                axios.post(SERVER_URL, {
                    data_1,
                    data_2,
                    data_3,
                    data_4,
                    data_5,
                    data_6
                });
                
                alert('Data received successfully');
                navigate('/edit_fin');
            } catch (error) {
                console.error('Error during data submission', error);
                alert('An error occurred while submitting the data.');
                alert(error);
            }

              navigate('/edit_fin');
              console.log({data_1, data_2, data_3, data_4, data_5, data_6})


            }}>
            <div className='edit_middle_contents'>

                <div className = "edit_insert_title">
                    <h4 className='edit_insert_title_1'>Q. 자소서명</h4>
                    <input 
                    type="text" 
                    placeholder="내용을 입력하세요 Ex) 대한항공 지원서" 
                    className = "insert_title"
                    value={data_1}
                    onChange={(e)=> {
                        setdata_1(e.target.value)
                      }}/>
                </div>

                <div className = "edit_insert_question">
                    <h4>Q. 자소서 문항을 입력하세요</h4>
                    <input 
                    type="text" 
                    placeholder="내용을 입력하세요." 
                    className = "insert_question"
                    value={data_2}
                    onChange={(e)=> {
                        setdata_2(e.target.value)
                      }}/>
                </div>

                <div className = "edit_insert_story">
                    <h4>Q. 자소서 문항 내용을 입력하세요 (4000자 이내)</h4>
                    <input 
                    type="text" 
                    placeholder="내용을 입력하세요." 
                    className = "insert_story"
                    value={data_3}
                    onChange={(e)=> {
                        setdata_3(e.target.value)
                      }}/>
                </div>

                    {extraInputs.map((input, index) => (
                            <div key={index}>
                                <h4>Q. 자소서 문항을 입력하세요</h4>
                                <input 
                                    type="text" 
                                    value={input}
                                    onChange={(event) => handleInputChange(index, event)}
                                    placeholder={`내용을 입력하세요.`}
                                    className={`insert_question`}
                                />
                            </div>
                    ))}

                

                <div className='button_page'>
                    <button className='plus_btn' onClick={addInputs}>
                        <span className="plus_text">+</span>
                    </button>
                    
                    
                        <button type='submit' className='exe_edit'>
                                첨삭하기
                        </button>
                    
                    <Routes>
                        <Route path='/edit_fin' element={<Edit_fin />}/>
                    </Routes>
                </div>

            </div>
            
            
            </form>
        </div>
    );
};

export default Edit;