package br.com.cesar.maestroAnalytics.repository.aluno;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.cesar.maestroAnalytics.model.Aluno;


public class AlunoRepositoryImpl implements AlunoRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	
	@Override
	public List<Aluno> filtrar() {
		// Lógica para filtrar alunos por um filtro passado por parametro
		return null;
	}
}
