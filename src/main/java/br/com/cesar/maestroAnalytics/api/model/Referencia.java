package br.com.cesar.maestroAnalytics.api.model;

public enum Referencia {
	
		PB("1º Bimestre"),
		SB("2º Bimestre"),
		TB("3º Bimestre"),
		RF("Recuperação/Reposição");
		
		
		private String descricao;
		

		private Referencia(String descricao) {
			this.descricao = descricao;
		}

		public String getDescricao() {
			return descricao;
		}

		public void setDescricao(String descricao) {
			this.descricao = descricao;
		}


}
