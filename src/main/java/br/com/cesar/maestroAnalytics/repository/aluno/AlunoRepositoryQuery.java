package br.com.cesar.maestroAnalytics.repository.aluno;

import java.util.List;

import br.com.cesar.maestroAnalytics.model.Aluno;

public interface AlunoRepositoryQuery {

	List<Aluno> filtrar();

}
