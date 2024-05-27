import React from 'react';

import { Routes, Route, Link} from "react-router-dom";

import Home from '../pages/Home';
import MyPage from '../pages/Mypage';
import Edit from '../pages/Edit';

import '../CSS/Main.css';

import logo from '..//Pictures/Logo.png';

import hand from '../Pictures/Main_Page/손.png';
import s_img1 from '../Pictures/Main_Page/연필.png';
import s_img2 from '../Pictures/Main_Page/시계.png';
import s_img3 from '../Pictures/Main_Page/핀.png';
import s_img4 from '../Pictures/Main_Page/고민.png';
import middle_line from '../Pictures/Main_Page/Middle Line.png'

import img1 from '../Pictures/Main_Page/1.png';
import img2 from '../Pictures/Main_Page/2.png';
import img3 from '../Pictures/Main_Page/3.png';
import img4 from '../Pictures/Main_Page/4.png';

const Main = () => {
    return (
        <div className="wrapper_main">
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
                    </Routes>
                </div>
                <div className='middle-contents_1'>
                    <img className='hand_img' src={hand} />
                    <h1 className='middle_text'>당신의 이야기를 완성해보세요.</h1>
                    <Link className='go_to_edit_1' to='/edit'>
                        <button className='go_to_edit'>첨삭하러 가기</button>
                    </Link>
                </div>

                <div className='middle_contents_2'>
                    <h1>자소서 고민, 이제 그만! 쉽고 빠른 해결책</h1>
                    <h4 className='s_text_2'>당신의 이력서를 빛나게 만들어줄 AI 첨삭 서비스</h4>
                </div>

                <div className='middle_contents_3'>
                    <div className='mini_text_1'>
                        <img src={s_img1} width='35px' />
                        <h3>자동 첨삭과 정확한 피드백</h3>
                        <h4>
                            AI 기술을 활용하여 문법 오류,
                            표현 미흡, 내용 구조 등을 신속
                            하게 식별하여 개선 방안을
                            제시합니다.
                            </h4>

                    </div>
                    <div className='mini_text_2'>
                        <img src={s_img2} width='35px'/>
                        <h3>빠른 결과 확인과 24/7 서비스</h3>
                        <h4>
                            언제든지 서비스에 접속하여
                            자소서를 업로드하고 첨삭을
                            요청할 수 있는 24시간 서비스입니다.
                        </h4>
                    </div>
                    <div className='mini_text_3'>
                        <img src={s_img3} width='35px' />
                        <h3>정확성과 일관성</h3>
                        <h4>
                            자소서 첨삭AI는 대용량 데이터를
                            기반으로 학습하므로 정확하고
                            섬세한 피드백을 제공합니다.
                        </h4>
                    </div>
                    <div className='mini_text_4'>
                        <img src={s_img4} width='35px' />
                        <h3>서류 합격률 예측 서비스</h3>
                        <h4>
                            대용량의 합격 자소서를 기반으로
                            사용자의 자소서 합격률 예측 서비스를
                            제공합니다.
                        </h4>
                    </div>
                </div>
                <div className='middle_line_1'>
                    <img src={middle_line} className='middle_line'/>
                </div>

                <div className='middle_contents_4'>
                    <div className='mini_text_1_1'>
                        <img src={img1} width='480px' />
                        <h2>
                            1. 자기소개서 점수 측정 및
                            자기소개서 첨삭 제공
                        </h2>
                        <h4>
                            자기소개서 작성에 자신감을 불어넣고,
                            최고의 결과물을 위해 도와드립니다!

                            자기소개서 첨삭을 통해 자기소개서 작성 팁을 얻어가세요!
                        </h4>

                    </div>
                    <div className='mini_text_2_1'>
                        <img src={img2} width='480px'/>
                        <h2>2. 자기소개서 관리</h2>
                        <h4>
                            자신의 자기소개서를 손쉽게 저장하고,
                            회사별로 구분하여 효율적으로 관리하세요!
                            입사 지원 시 해당 회사에 맞는 자기소개서를
                            손쉽게 찾아볼 수 있습니다!
                        </h4>
                    </div>
                    <div className='mini_text_3_1'>
                        <img src={img3} width='480px' />
                        <h2>3. 자격증 및 어학점수 관리</h2>
                        <h4>
                            여러분의 자격증과 어학점수를 효과적으로 관리하세요!
                            한눈에 보기 쉽게 자신의 스펙을 확인할 수 있습니다.
                        </h4>
                    </div>
                    <div className='mini_text_4_1'>
                        <img src={img4} width='480px' />
                        <h2>4. 합격 자기소개서 제공</h2>
                        <h4>
                            다양한 분야의 회사에 입사한 지원자들의
                            합격 자기소개서를 제공합니다.
                            합격 자기소개서를 한눈에 확인하고,
                            자기소개서 전략을 찾아보세요!
                        </h4>
                    </div>
                </div>
                <div className='go_to_edit_2'>
                    <Link to='/edit'>첨삭하기</Link>
                </div>
                <div className='Last_contents'>
                </div>

                
        </div>

    );
};

export default Main;