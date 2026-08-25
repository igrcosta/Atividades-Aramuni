package com.ativWheatherAPI.controller;

import com.ativWheatherAPI.model.ClimaResponse;
import com.ativWheatherAPI.service.ClimaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clima")
public class ClimaController {

    private final ClimaService climaService;

    public ClimaController(ClimaService climaService) {
        this.climaService = climaService;
    }

    @GetMapping("/belo-horizonte")
    public ClimaResponse getClimaBH() {
        return climaService.obterClimaBeloHorizonte();
    }
}