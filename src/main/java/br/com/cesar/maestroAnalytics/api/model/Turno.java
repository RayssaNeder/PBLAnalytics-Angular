package br.com.cesar.maestroAnalytics.api.model;

public enum Turno {
	M("Matutino"),
	T("Vespertino"),
	N("Noturno");
	
	
	private String descricao;
	

	private Turno(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	

}
