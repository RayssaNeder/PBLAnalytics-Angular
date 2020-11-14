package br.com.cesar.maestroAnalytics.api.model;

public enum StatusTurma {
	NI("Não iniciada"),
	I("Iniciada"),
	C("Conluísa");
	
	
	private String descricao;
	

	private StatusTurma(String descricao) {
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
