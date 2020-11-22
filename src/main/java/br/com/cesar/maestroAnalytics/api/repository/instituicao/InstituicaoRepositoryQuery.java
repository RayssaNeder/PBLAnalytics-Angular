package br.com.cesar.maestroAnalytics.api.repository.instituicao;

import java.util.List;

import br.com.cesar.maestroAnalytics.api.model.Instituicao;


public interface InstituicaoRepositoryQuery {

	public List<Instituicao> filtrar();

}
