package org.web.controller;

import org.domain.dto.LoginDTO;
import org.domain.dto.SignUpDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.web.service.LoginService;
import org.web.service.SignupService;


@Controller
@ResponseBody
public class UserController {

    private final SignupService signupService;
    private final LoginService loginService;

    public UserController(SignupService signupService, LoginService loginService) {

        this.signupService = signupService;
        this.loginService = loginService;
    }

    @PostMapping("/user/signup")
    public String signup(@RequestBody SignUpDTO signUpDTO) {

        signupService.signup(signUpDTO);

        return "ok"; //회원가입 성공 페이지
    }


    @PostMapping("/user/login")
    public String login() {
        return "redirect:/index.html";

//    public String login(@RequestBody LoginDTO loginDTO) {
//        if (loginService.login(loginDTO)) {
//            return "Login successful";
//        } else {
//            return "Login failed";
//        }

    }
}
