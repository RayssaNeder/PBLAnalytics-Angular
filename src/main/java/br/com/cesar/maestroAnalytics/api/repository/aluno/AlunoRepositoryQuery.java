package br.com.cesar.maestroAnalytics.api.repository.aluno;

import java.util.List;

import br.com.cesar.maestroAnalytics.api.model.Aluno;


public interface AlunoRepositoryQuery {

	public List<Aluno> filtrar();

}
