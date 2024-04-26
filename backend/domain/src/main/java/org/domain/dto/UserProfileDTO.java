package org.domain.dto;

import lombok.Getter;
import lombok.Setter;
import org.domain.entity.UserEntity;

@Getter
@Setter
public class UserProfileDTO {
    private String userName;
    private String email;
    private String provider;
    public UserEntity toEntity() {
        return UserEntity.builder()
                .userName(this.userName)
                .email(this.email)
                .provider(this.provider)
                .build();
    }
}
