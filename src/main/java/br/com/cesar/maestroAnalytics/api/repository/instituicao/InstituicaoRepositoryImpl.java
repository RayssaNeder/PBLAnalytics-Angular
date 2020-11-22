package br.com.cesar.maestroAnalytics.api.repository.instituicao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import br.com.cesar.maestroAnalytics.api.model.Aluno;
import br.com.cesar.maestroAnalytics.api.model.Instituicao;


public class InstituicaoRepositoryImpl implements InstituicaoRepositoryQuery {

	@PersistenceContext
	private EntityManager manager;

	
	@Override
	public List<Instituicao> filtrar() {
		// Lógica para filtrar alunos por um filtro passado por parametro
		return null;
	}
}
