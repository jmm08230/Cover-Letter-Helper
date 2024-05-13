package org.web.repository;

import org.domain.entity.PassedCoverLetterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassedCoverLetterRepository extends JpaRepository<PassedCoverLetterEntity,Long> {
    PassedCoverLetterEntity findPassedCoverLetterEntityByUserId(String userId);
}
