package org.domain.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CoverLetterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;
    @Column
    private String userId;
    @Column
    private String title;
    @Column
    private String content;

    public void patch(CoverLetterEntity coverLetter) {
        if (coverLetter.title != null) {
            this.title = coverLetter.title;
        }
        if (coverLetter.content != null) {
            this.content = coverLetter.content;
        }
    }
}
