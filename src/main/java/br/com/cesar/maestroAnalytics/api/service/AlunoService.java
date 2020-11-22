package br.com.cesar.maestroAnalytics.api.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cesar.maestroAnalytics.api.model.Aluno;
import br.com.cesar.maestroAnalytics.api.repository.AlunoRepository;
import br.com.cesar.maestroAnalytics.api.repository.CidadeRepository;
import br.com.cesar.maestroAnalytics.api.repository.EstadoRepository;

@Service
public class AlunoService {

	@Autowired
	private CidadeRepository cidadeRepository;
	
	@Autowired
	private EstadoRepository estadoRepository;
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Transactional
	public Aluno save(Aluno aluno) {
	//	Optional<Aluno> alunoExistente = cidadeRepository.findByCodigo(aluno.getEndereco().getCidade().getCodigo());
		/*
		 * if(!cidadeExistente.isPresent()) { ///lança exceção }
		 */
		//Estado estadoExistente = estadoRepository.findOne(Long.parseLong("1"));
		
		//aluno.getEndereco().setEstado(estadoExistente);
		aluno = alunoRepository.save(aluno);
		return aluno;
	}

}
