package com.ativWheatherAPI.service;

import com.ativWheatherAPI.model.ClimaResponse;
import org.springframework.stereotype.Service;
import java.util.Map;
import org.springframework.web.client.RestTemplate;

@Service
public class ClimaService{
    public ClimaResponse obterClimaBeloHorizonte() {
        String url = "https://api.open-meteo.com/v1/forecast?latitude=-19.9208&longitude=-43.9378&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

        RestTemplate restTemplate = new RestTemplate();
        //vai requisitar e me entregar um JSON em formato de MAP
        Map<String, Object> response = restTemplate.getForObject(url, Map.class);

        //Pego a parte "current" do JSON
        Map<String, Object> current = (Map<String, Object>) response.get("current");
        
        Double temp = Double.valueOf(current.get("temperature_2m").toString());
        Integer umidade = Integer.valueOf(current.get("relative_humidity_2m").toString());
        Double velocidadeVento = Double.valueOf(current.get("wind_speed_10m").toString());

        return new ClimaResponse("Belo Horizonte - MG", temp, umidade, velocidadeVento);
    }
}
