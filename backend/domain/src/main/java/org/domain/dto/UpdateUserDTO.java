package org.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UpdateUserDTO {
    //수정된 유저 정보

    private String UserName;
    private String email;
    private String password;
    private String passwordCheck;
    private String phone;
}
