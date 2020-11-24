package br.com.cesar.maestroAnalytics.api.model;

public enum Grau {
	
	B("Bacharelado"),
	L("Licenciatura");
	
	private String descricao;
	

	private Grau(String descricao) {
		this.descricao = descricao;
	}


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
}
