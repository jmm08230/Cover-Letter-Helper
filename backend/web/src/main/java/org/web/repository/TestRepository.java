package org.web.repository;

import org.domain.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestRepository extends JpaRepository<TestEntity, Long> {
    public TestEntity getTestEntityById(Long id);
}
