package br.com.cesar.maestroAnalytics.api.model;

public enum Perfil {
	ADM("administrador"),
	ALN("aluno"),
	PFS("professor");
	
	private String descricao;

	public String getDescricao() {
		return descricao;
	}

	private Perfil(String descricao) {
		this.descricao = descricao;
	}
	
	

}
