import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const N_Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: '1jFE8i1u9idTDmUwiTAw',
      callbackUrl: 'http://localhost:3000/callback',
      isPopup: false,
    });

    naverLogin.init();

    naverLogin.getLoginStatus((status) => {
      if (status) {
        const user = naverLogin.user;
        console.log('User Info:', user);
        navigate('/'); // 로그인 성공 후 리디렉션할 페이지
      } else {
        console.log('Naver login failed');
      }
    });
  }, [navigate]);

  return <div>Logging in...</div>;
};

export default N_Callback;