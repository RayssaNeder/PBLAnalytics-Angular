package br.com.cesar.maestroAnaltics.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cesar.maestroAnaltics.model.Aluno;


public interface AlunoRepository extends JpaRepository<Aluno, Long> {

}
