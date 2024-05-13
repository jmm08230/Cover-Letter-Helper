package org.web.service;

import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web.repository.CoverLetterRepository;
import org.domain.dto.CoverLetterDTO;
import org.domain.entity.CoverLetterEntity;

import java.util.ArrayList;
import java.util.List;

@Service
@ToString
@Slf4j
public class CoverLetterService {

    @Autowired
    private CoverLetterRepository coverLetterRepository;
    public CoverLetterDTO show(String userId) {
        CoverLetterEntity entity = coverLetterRepository.findCoverLetterEntityByUserId(userId);
        CoverLetterDTO coverLetter = new CoverLetterDTO(entity);
        return coverLetter;
    }

    public Iterable<CoverLetterDTO> index() {
        Iterable<CoverLetterEntity> coverLetters = coverLetterRepository.findAll();
        List<CoverLetterDTO> dtos = new ArrayList<>();
        for (CoverLetterEntity entity : coverLetters) {
            CoverLetterDTO dto = new CoverLetterDTO(entity);
            dtos.add(dto);
        }
        return dtos;
    }

    public CoverLetterDTO create(CoverLetterDTO dto) {
        CoverLetterEntity coverLetter = dto.toEntity();
        if (coverLetter.getUserId() == null) {
            return null;
        }
        CoverLetterDTO created = new CoverLetterDTO(coverLetterRepository.save(coverLetter));
        return created;
    }

    public CoverLetterDTO update(String userId, CoverLetterDTO dto) {
        CoverLetterEntity coverLetter = dto.toEntity();
        CoverLetterEntity target = coverLetterRepository.findCoverLetterEntityByUserId(userId);
//        if (target == null || !userId.equals(target.getUserId())) {
//            return null; 여기서 자꾸 에러가 뜸
//        }
        target.patch(coverLetter);
        CoverLetterEntity updated = coverLetterRepository.save(target);
        CoverLetterDTO updateCoverLetter = new CoverLetterDTO(updated);
        return updateCoverLetter;
    }


    public CoverLetterEntity delete(String userId) {
        CoverLetterEntity target = coverLetterRepository.findCoverLetterEntityByUserId(userId);
        if (target == null) {
            return null;
        }
        coverLetterRepository.delete(target);
        return target;
    }

}

