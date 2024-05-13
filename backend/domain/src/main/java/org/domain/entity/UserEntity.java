package org.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Locale;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    private String userId;
    private String userName;
    private String email;
    private String password;
    private String passwordCheck;
    private String phone;
    private LocalDate birth;
    private String provider;


    public UserEntity updateUser(String userName, String email) {
        this.userName = userName;
        this.email = email;

        return this;
    }

    public void update(String userName, String email, String password, String passwordCheck, String phone){

        this.userName = userName;
        this.email = email;
        this.password = password;
        this.passwordCheck = passwordCheck;
        this.phone = phone;
    }
}
