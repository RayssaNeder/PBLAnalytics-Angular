package br.com.cesar.maestroAnaltics.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "curso")
public class Curso {
	@Id
	private Long codigo;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@NotNull
	@Size(min = 3, max = 20)
	private String nome;
	
	@ManyToMany
	@JoinTable(name = "curso_disciplina", joinColumns = @JoinColumn(name = "curso_codigo"), inverseJoinColumns = @JoinColumn(name = "disciplina_codigo"))
	private List<Turma> disciplinas = new ArrayList<>();

	@OneToMany(mappedBy = "curso", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Turma> turmas;

}
