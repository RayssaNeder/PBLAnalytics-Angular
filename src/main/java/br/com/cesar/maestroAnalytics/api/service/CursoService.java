package br.com.cesar.maestroAnalytics.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cesar.maestroAnalytics.api.model.Curso;
import br.com.cesar.maestroAnalytics.api.model.Instituicao;
import br.com.cesar.maestroAnalytics.api.repository.CursoRepository;
import br.com.cesar.maestroAnalytics.api.repository.InstituicaoRepository;


@Service
public class CursoService {
	
	@Autowired
	private CursoRepository cursoRepository;
	
	@Autowired
	private InstituicaoRepository instituicaoRepository;
	
	@Transactional
	public Curso save(Curso curso) {
		Optional<Instituicao> instituicaoExistente = instituicaoRepository.findByCodigo(curso.getInstituicao().getCodigo());
		
		  if(!instituicaoExistente.isPresent()) {
			  ///lança exceção 
		  }
		 
		curso.setInstituicao(instituicaoExistente.get());
		
		curso = cursoRepository.save(curso);
		return curso;
	}

}
