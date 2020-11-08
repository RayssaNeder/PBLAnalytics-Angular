package br.com.cesar.maestroAnalytics.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cesar.maestroAnalytics.api.model.Professor;

public interface ProfessoresRepository  extends JpaRepository<Professor, Long> {

}
