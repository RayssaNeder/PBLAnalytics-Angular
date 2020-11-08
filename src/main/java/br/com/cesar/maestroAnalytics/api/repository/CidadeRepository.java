package br.com.cesar.maestroAnalytics.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cesar.maestroAnalytics.api.model.Cidade;


public interface CidadeRepository extends JpaRepository<Cidade, Long> {

	
	Optional<Cidade> findByCodigo(Long codigo);
}
