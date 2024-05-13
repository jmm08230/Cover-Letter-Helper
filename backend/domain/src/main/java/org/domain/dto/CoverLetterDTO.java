package org.domain.dto;

import lombok.Getter;
import lombok.Setter;
import org.domain.entity.CoverLetterEntity;

@Setter
@Getter
public class CoverLetterDTO {
    private String userId;
    private String title;
    private String content;

    public CoverLetterDTO(CoverLetterEntity coverLetter) {
        this.content = coverLetter.getContent();
        this.title = coverLetter.getTitle();
        this.userId = coverLetter.getUserId();

    }
    public CoverLetterEntity toEntity() {
        CoverLetterEntity entity = new CoverLetterEntity();
        entity.setUserId(this.userId);
        entity.setTitle(this.title);
        entity.setContent(this.content);
        return entity;
    }


}
