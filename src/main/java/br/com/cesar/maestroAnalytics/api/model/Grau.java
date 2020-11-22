package br.com.cesar.maestroAnalytics.api.model;

public enum Grau {
	
	B("Bacharelado"),
	L("Licenciatura");
	
	private String descricao;
	

	private Grau(String descricao) {
		this.descricao = descricao;
	}

}
