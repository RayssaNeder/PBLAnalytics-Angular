package br.com.cesar.maestroAnalytics.api.model;

public enum Bolsa {
	NB("Nao bolsista"),
	B25("Bolsa 25%"),
	B50("Bolsa 50%"),
	B100("Bolsa 100%");
	
	private String descricao;

	private Bolsa(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
	
	

}
