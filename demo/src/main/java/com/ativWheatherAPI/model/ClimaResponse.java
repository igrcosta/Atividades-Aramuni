package com.ativWheatherAPI.model;

public class ClimaResponse {
    private String cidade;
    private Double temperatura;
    private int umidade;
    private Double velocidadeVento;

    public ClimaResponse(String cidade, Double temperatura, int umidade, double velocidadeVento) {
        this.cidade = cidade;
        this.temperatura = temperatura;
        this.umidade = umidade;
        this.velocidadeVento = velocidadeVento;
    }

    public String getCidade() { return cidade; }
    public Double getTemperatura() { return temperatura; }
    public int getUmidade() { return umidade; }
    public double getVelocidadeVento() { return velocidadeVento; }

}
