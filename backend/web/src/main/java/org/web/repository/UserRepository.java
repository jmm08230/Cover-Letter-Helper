package org.web.repository;

import org.domain.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Boolean existsByUserId(String userId);
    Boolean existsByEmail(String email);
    UserEntity findByUserId(String userId);
    Optional<UserEntity> findUserByEmailAndProvider(String email, String provider);
}
