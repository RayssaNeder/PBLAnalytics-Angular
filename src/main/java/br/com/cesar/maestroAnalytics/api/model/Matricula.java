package br.com.cesar.maestroAnalytics.api.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "matricula")
public class Matricula implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	private String sku;
	@Column(name = "data_matricula")
	private LocalDate dataMatricula;
	private Curso curso;
	private Disciplina disciplina;
	private Aluno aluno;
	private Turma turma;
	private Situacao situacao;
	@OneToMany(mappedBy = "matricula", cascade = CascadeType.ALL) 
	private List<Avaliacao> avaliacoes = new ArrayList<>();

}
