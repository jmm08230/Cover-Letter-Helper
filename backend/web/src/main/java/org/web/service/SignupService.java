package org.web.service;

import org.domain.dto.SignUpDTO;
import org.domain.entity.UserEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.web.repository.UserRepository;

import java.time.LocalDate;

@Service
public class SignupService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public SignupService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder){
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public void signup(SignUpDTO signUpDTO){

        String userId = signUpDTO.getUserId();
        String password = signUpDTO.getPassword();
        String passwordCheck = signUpDTO.getPasswordCheck();
        String email = signUpDTO.getEmail();
        String userName = signUpDTO.getUserName();
        String phone = signUpDTO.getPhone();
        LocalDate birth = signUpDTO.getBirth();

        Boolean isExist1 = userRepository.existsByUserId(userId); //존재하는 아이디인지 확인
        Boolean isExist2 = userRepository.existsByEmail(email);
        Boolean isRight = passwordCheck.equals(password);

        if(isExist1) {
            return;
        }
        if(isExist2){
            return;
        }

        if(isRight){
            return;
        } else {
            System.out.println("비밀번호가 옳지 않습니다.");
        }

        UserEntity data = new UserEntity();

        data.setUserId(userId);
        data.setUserName(userName);
        data.setEmail(email);
        data.setPassword(bCryptPasswordEncoder.encode(password));
        data.setPasswordCheck(bCryptPasswordEncoder.encode(passwordCheck));
        data.setPhone(phone);
        data.setBirth(birth);

        userRepository.save(data);

    }

}
