package org.web.service;

import org.domain.dto.CoverLetterDTO;
import org.domain.entity.CoverLetterEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web.repository.CoverLetterRepository;

import java.util.ArrayList;
import java.util.List;

@Service
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

    public CoverLetterEntity create(CoverLetterDTO dto) {
        CoverLetterEntity coverLetter = dto.toEntity();
        if (coverLetter.getUserId() != null) {
            return null;
        }
        return coverLetterRepository.save(coverLetter);
    }

    public CoverLetterEntity update(String userId, CoverLetterDTO dto) {
        CoverLetterEntity coverLetter = dto.toEntity();
        CoverLetterEntity target = coverLetterRepository.findCoverLetterEntityByUserId(userId);
        if (target == null | userId != coverLetter.getUserId()) {
            return null;
        }
        target.patch(coverLetter);
        CoverLetterEntity updated = coverLetterRepository.save(target);
        return updated;
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

