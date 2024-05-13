package org.domain.dto;

import lombok.Getter;
import lombok.Setter;
import org.domain.entity.UserEntity;

import java.time.LocalDate;

@Getter
public class UserDTO {
    //mypage에 들어갈 유저정보

    private String userId;
    private String userName;
    private String email;
    private String phone;
    private LocalDate birth;

    public UserDTO (UserEntity userEntity) {
        this.userId = userEntity.getUserId();
        this.userName = userEntity.getUserName();
        this.email = userEntity.getEmail();
        this.phone = userEntity.getPhone();
        this.birth = userEntity.getBirth();
    }

}
