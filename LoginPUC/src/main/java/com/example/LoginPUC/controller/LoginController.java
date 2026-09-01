package com.example.LoginPUC.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// @RestController -> apenas BACKEND -> API REST
// @Controler -> Front-End + BACKEND -> HTML, CSS, JS, Thymeleaf

@Controller
public class LoginController {
    @GetMapping("/login")
    public String login() {
        return "login";
    }
}
