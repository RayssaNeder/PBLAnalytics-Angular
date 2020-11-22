package br.com.cesar.maestroAnalytics.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.cesar.maestroAnalytics.api.model.Instituicao;
import br.com.cesar.maestroAnalytics.api.repository.InstituicaoRepository;

@Service
public class InstituicaoService {
	
	@Autowired
	private InstituicaoRepository instituicaoRepository;

	public Instituicao save(Instituicao instituicao) {
		instituicao = instituicaoRepository.save(instituicao);
		return instituicao;
	}

}
