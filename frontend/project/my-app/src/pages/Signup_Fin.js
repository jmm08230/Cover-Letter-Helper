import React from "react";
import { Routes, Route, Link} from "react-router-dom";

import '../CSS/Signup_Fin.css';

import Home from '../pages/Home';

function Signup_Fin() {

    return (
        <div className="wrapper_signup">
            <div className='selfin_title'>
                <span className='main_title'>
                    selfin
                </span>
            </div>

            <div className="out_container_signup">
                <div className="in_signup-container">
                    <h1 className='welcom_text'>
                        환영합니다!
                    </h1>

                    <div className='ment'>
                        <span className='signup_fin_ment'>
                            {/*ㅇㅇ 대신 서버의 회원 name 데이터 들어가야함*/}
                            회원가입을 축하합니다.
                            <br></br>
                            함께 할 수 있어 기쁩니다.
                            <br></br>
                            지금 바로 서비스를 이용해보세요!
                        </span>
                    </div>

                    <Link to="/">
                        <button className='start_btn'>
                            시작하기
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup_Fin;