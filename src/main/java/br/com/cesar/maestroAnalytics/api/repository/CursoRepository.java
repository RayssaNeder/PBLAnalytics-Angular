package br.com.cesar.maestroAnalytics.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cesar.maestroAnalytics.api.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {

}
