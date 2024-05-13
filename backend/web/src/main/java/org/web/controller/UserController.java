package org.web.controller;

import org.domain.dto.LoginDTO;
import org.domain.dto.SignUpDTO;
import org.domain.dto.UpdateUserDTO;
import org.domain.dto.UserDTO;
import org.domain.entity.UserEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.web.service.LoginService;
import org.web.service.SignupService;
import org.web.service.UserService;


import java.util.List;

@RestController
@Controller
@ResponseBody
public class UserController {

    private final SignupService signupService;
    private final LoginService loginService;
    private final UserService userService;

    public UserController(SignupService signupService, LoginService loginService, UserService userService) {
        this.signupService = signupService;
        this.loginService = loginService;
        this.userService = userService;
    }

    //회원가입
    @PostMapping("/user/signup")
    public String signup(@RequestBody SignUpDTO signUpDTO) {

        signupService.signup(signUpDTO);

        return "회원가입 완료!"; //회원가입 성공 페이지
    }

    //로그인
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

    //마이페이지(개인정보 조회)
    @GetMapping("/user/mypage")
    public ResponseEntity<List<UserDTO>> findAllUsers(){

        List<UserDTO> users = userService.findAll()
                .stream()
                .map(UserDTO::new)
                .toList();

        return ResponseEntity.ok()
                .body(users);
    }

    //개인정보 수정
    @PatchMapping("/user/update")
    public ResponseEntity<UserEntity> updateUser(@PathVariable long id,
                @RequestBody UpdateUserDTO updateUserDTO){

        UserEntity userUpdateEntity = userService.update(id, updateUserDTO);

        return ResponseEntity.ok()
                .body(userUpdateEntity);
    }
}
