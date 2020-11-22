package br.com.cesar.maestroAnalytics.api.model;

public enum Modalidade {

		P("Presencial"),
		D("à distânica");
	
		
		private String descricao;
		

		private Modalidade(String descricao) {
			this.descricao = descricao;
		}


		public String getDescricao() {
			return descricao;
		}


		public void setDescricao(String descricao) {
			this.descricao = descricao;
		}
		
		


}
