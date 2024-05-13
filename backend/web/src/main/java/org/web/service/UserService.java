package org.web.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.domain.dto.UpdateUserDTO;
import org.domain.dto.UserDTO;
import org.domain.dto.UserProfileDTO;
import org.domain.entity.UserEntity;
import org.springframework.stereotype.Service;
import org.web.repository.UserRepository;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public List<UserEntity> findAll(){
        return userRepository.findAll(); //userentity 저장된 모든 데이터 조회
    }

    @Transactional
    public UserEntity update(long id, UpdateUserDTO updateUserDTO){

        UserEntity userEntity = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 사용자입니다,"));

        userEntity.update(updateUserDTO.getUserName(), updateUserDTO.getEmail(),
                updateUserDTO.getPassword(), updateUserDTO.getPasswordCheck(), updateUserDTO.getPhone());
        //password 인코딩 해야함
        //??? 비밀번호 뭐시기 따로 해야되겟따....

        return userEntity;
    }
}
