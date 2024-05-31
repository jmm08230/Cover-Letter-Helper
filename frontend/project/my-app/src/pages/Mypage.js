import React from 'react';

import { Routes, Route, Link} from "react-router-dom";

import Home from '../pages/Home';
import Main from '../pages/Main';
import Edit from '../pages/Edit';

import '../CSS/Mypage.css';

import logo from '..//Pictures/Logo.png'
import profile_man from '../Pictures/My_Page/남자.png'
import profile_girl from '../Pictures/My_Page/여자.png'

const MyPage = () => {
    return (
        <div className="wrapper_mypage">
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
                    <Route paht='/home' element={<Home />}/>
                </Routes>
            </div>

            <div className='mypage_middle_contents'>
                <div className='left_menu'>
                    <div className='left_menu_detail'>
                        <h2>My Page</h2>
                        <hr></hr>
                            <h4>개인정보</h4>
                            <div className='little_menu_1'>
                            <Link to='' className='certificate'>
                                자격증 및 어학점수
                            </Link>
                        </div>
                        <br></br>

                        <h4>
                            자소서
                        </h4>

                        
                        <Link to='' className='my_CL'>나의 자소서</Link>
                        <br></br>
                        <hr className="bottom_v_line"></hr>

                    </div>
                    <div className="logout">
                        <Link to='/'>로그아웃</Link>
                        <Routes>
                    <Route paht='/' element={<Home />}/>
                </Routes>
                    </div>
                    
                </div>
                <div className="right_menu">
                    <div className='private_data'>
                    
                    <hr className="v_line"></hr>
                        <h4 className='private_data_text'>개인정보</h4>
                        <div className='blue_box'></div>
                    </div>

                    <div className="profile">
                        <img className='profile_man' src={profile_man}/>
                        <div className='profile_text'>
                            <a className='name'>이름: </a>
                            <a className='age'>나이: </a>
                            <a className='birthday'>생년월일: </a>
                            <a className='email'>이메일: </a>
                        </div>

                        
                        
                    </div>

                    <hr clasaName='profile_hr'></hr>

                </div>
                
            </div>

        </div>
    );
};

export default MyPage;
