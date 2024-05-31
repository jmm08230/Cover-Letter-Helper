// src/components/NaverLogin.js
import React, { useEffect } from 'react';

const NaverLogin = () => {
  useEffect(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: '1jFE8i1u9idTDmUwiTAw',
      callbackUrl: 'http://localhost:3000/callback',
      isPopup: false, // 팝업 형태로 할 경우 true
      loginButton: { color: 'green', type: 3, height: 50 }, // 네이버 로그인 버튼 스타일
    });

    naverLogin.init();

    // 네이버 로그인 버튼을 클릭하면 호출되는 콜백
    naverLogin.getLoginStatus((status) => {
      if (status) {
        const user = naverLogin.user;
        console.log('User Info:', user);
      } else {
        console.log('Naver login failed');
      }
    });
  }, []);

  return (
    <div id="naverIdLogin" />
  );
};

export default NaverLogin;