package org.web.repository;

import org.domain.entity.CoverLetterEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoverLetterRepository extends CrudRepository<CoverLetterEntity,Long> {
    CoverLetterEntity findCoverLetterEntityByUserId(String userId);
}
