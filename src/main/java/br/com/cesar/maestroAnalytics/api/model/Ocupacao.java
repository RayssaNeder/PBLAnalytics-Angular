package br.com.cesar.maestroAnalytics.api.model;

public enum Ocupacao {
	EMP("Empregado"),
	DES("Desempregado;"),
	EST("Estagiário");
	
	private String descricao;

	private Ocupacao(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
	
	

}
