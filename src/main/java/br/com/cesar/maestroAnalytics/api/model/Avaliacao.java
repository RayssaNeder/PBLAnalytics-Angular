package br.com.cesar.maestroAnalytics.api.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "avaliacao")
public class Avaliacao {
	
	
	@Id
	private Long codigo;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@NotNull
	@Size(min = 3, max = 20)
	private String nome;
	
	private LocalDate dataAplicacao;
	

}
