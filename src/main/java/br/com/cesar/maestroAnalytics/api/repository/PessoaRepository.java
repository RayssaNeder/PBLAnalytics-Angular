package br.com.cesar.maestroAnalytics.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cesar.maestroAnalytics.api.model.Pessoa;


public interface PessoaRepository extends JpaRepository<Pessoa, Long>  {

}
