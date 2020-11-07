package br.com.cesar.maestroAnalytics.model;

public enum Situacao {
	A("Aprovado"),
	R("Reprovado"),
	ER("Em recuperação"),
	EC("Em construcao");
	
	
	private String descricao;

	private Situacao(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}
	
	

}
