package br.com.cesar.maestroAnalytics.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cesar.maestroAnalytics.api.model.Aluno;


public interface AlunoRepository extends JpaRepository<Aluno, Long> {

}
