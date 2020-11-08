package br.com.cesar.maestroAnalytics.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cesar.maestroAnalytics.api.model.Estado;

public interface EstadoRepository extends JpaRepository<Estado, Long> {
	
	Optional<Estado> findByCodigo(Long codigo);

}
