package org.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private int id;

    private String userId;
    private String userName;
    private String email;
    private String password;
    private String passwordCheck;
    private String phone;
    private LocalDate birth;
}
