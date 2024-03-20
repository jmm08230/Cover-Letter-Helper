package org.web;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.web.repository.TestRepository;

@Controller
@AllArgsConstructor
public class MainController {
    @GetMapping("/")
    public String home() {
        System.out.println("Home Called!");
        return "index.html";
    }

    private final TestRepository testRepository;

    @GetMapping("/repository")
    public ResponseEntity<String> repository() {
        System.out.println("Repository Called");
        return ResponseEntity.ok().body(testRepository.getTestEntityById(0L).getName());
    }
}
