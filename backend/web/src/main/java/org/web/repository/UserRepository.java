package org.web.repository;

import org.domain.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    Boolean existsByUserId(String userId);
    Boolean existsByEmail(String email);


}
