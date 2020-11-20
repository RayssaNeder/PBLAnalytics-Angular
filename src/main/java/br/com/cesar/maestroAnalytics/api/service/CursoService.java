package br.com.cesar.maestroAnalytics.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cesar.maestroAnalytics.api.model.Curso;
import br.com.cesar.maestroAnalytics.api.repository.CursoRepository;


@Service
public class CursoService {
	
	@Autowired
	private CursoRepository cursoRepository;
	
	@Transactional
	public Curso save(Curso curso) {
	//	Optional<Aluno> alunoExistente = cidadeRepository.findByCodigo(aluno.getEndereco().getCidade().getCodigo());
		/*
		 * if(!cidadeExistente.isPresent()) { ///lança exceção }
		 */
		//Estado estadoExistente = estadoRepository.findOne(Long.parseLong("1"));
		
		//aluno.getEndereco().setEstado(estadoExistente);
		curso = cursoRepository.save(curso);
		return curso;
	}

}
