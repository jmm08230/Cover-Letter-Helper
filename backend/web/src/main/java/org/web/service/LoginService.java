package org.web.service;

import org.domain.dto.LoginDTO;
import org.domain.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.web.repository.UserRepository;

@Service
public class LoginService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public LoginService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder){
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public boolean login(LoginDTO loginDTO) {
        String userId = loginDTO.getUserId();
        String password = loginDTO.getPassword();

        // 아이디로 사용자 조회
        UserEntity user = userRepository.findByUserId(userId);

        // 사용자가 존재하고, 비밀번호가 일치하면 로그인 성공
        if (user != null && bCryptPasswordEncoder.matches(password, user.getPassword())) {
            return true;
        }

        return false;
    }
}
