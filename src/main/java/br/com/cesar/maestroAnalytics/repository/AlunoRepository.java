package br.com.cesar.maestroAnalytics.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cesar.maestroAnalytics.model.Aluno;


public interface AlunoRepository extends JpaRepository<Aluno, Long> {

}
