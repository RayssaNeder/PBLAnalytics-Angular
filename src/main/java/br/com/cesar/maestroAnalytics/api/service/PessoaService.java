package br.com.cesar.maestroAnalytics.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.cesar.maestroAnalytics.api.model.Aluno;
import br.com.cesar.maestroAnalytics.api.model.Pessoa;
import br.com.cesar.maestroAnalytics.api.repository.PessoaRepository;

@Service
public class PessoaService {
	
	@Autowired
	PessoaRepository pessoaRepository;

	public Pessoa save(Pessoa pessoa) {
		pessoa = pessoaRepository.save(pessoa);
		return pessoa;
	}

}
