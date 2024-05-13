package org.web.controller;

import org.domain.dto.CoverLetterDTO;
import org.domain.entity.CoverLetterEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web.service.CoverLetterService;

import java.util.List;

@RestController
public class CoverLetterController {

    private static final Logger logger = LoggerFactory.getLogger(CoverLetterController.class);

    @Autowired
    private CoverLetterService coverLetterService;

    @GetMapping("/cover-letter")
    public List<CoverLetterDTO> index() {
        logger.info("Fetching all cover letters");
        return (List<CoverLetterDTO>) coverLetterService.index();
    }

    @GetMapping("/cover-letter/get-{userId}-cover-letter")
    public CoverLetterDTO show(@PathVariable String userId) {
        logger.info("Fetching cover letter for user with ID: {}", userId);
        return coverLetterService.show(userId);
    }

    @PatchMapping("/cover-letter/create-{userId}-cover-letter")
    public ResponseEntity<CoverLetterEntity> create(@RequestBody CoverLetterDTO dto) {
        CoverLetterEntity created = coverLetterService.create(dto).toEntity();
        return (created != null) ?
                ResponseEntity.status(HttpStatus.OK).body(created) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @PatchMapping("/cover-letter/patch-{userId}-cover-letter")
    public ResponseEntity<Object> update(@PathVariable String userId, @RequestBody CoverLetterDTO dto) {
        CoverLetterEntity updated = coverLetterService.update(userId, dto).toEntity();
        return (updated != null) ?
                ResponseEntity.status(HttpStatus.OK).body(updated) :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

    }

    @DeleteMapping("/cover-letter/delete-{userId}-cover-letter")
    public ResponseEntity<CoverLetterEntity> delete(@PathVariable String userId) {
        CoverLetterEntity deleted = coverLetterService.delete(userId);
        return (deleted != null) ?
                ResponseEntity.status(HttpStatus.NO_CONTENT).build() :
                ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
