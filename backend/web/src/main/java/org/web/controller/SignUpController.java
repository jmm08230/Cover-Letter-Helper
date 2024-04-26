package org.web.controller;

import lombok.RequiredArgsConstructor;
import org.domain.dto.SignUpDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.web.service.SignupService;


@Controller
@ResponseBody
public class SignUpController {

    private final SignupService signupService;

    public SignUpController(SignupService signupService){

        this.signupService = signupService;
    }

    @PostMapping("/user/signup")
    public String signup(SignUpDTO signUpDTO){

        signupService.signup(signUpDTO);

        return "ok"; //회원가입 성공 페이지
    }

}
