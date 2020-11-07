package br.com.cesar.maestroAnaltics.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
public class Professor {
	
	@Id
	private Long codigo;
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@NotNull
	@Size(min = 3, max = 20)
	private String nome;
	
	@ManyToMany
	@JoinTable(name = "professor_disciplina", joinColumns = @JoinColumn(name = "professor_codigo"), inverseJoinColumns = @JoinColumn(name = "disciplina_codigo"))
	private List<Turma> disciplinas = new ArrayList<>();

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public List<Turma> getDisciplinas() {
		return disciplinas;
	}

	public void setDisciplinas(List<Turma> disciplinas) {
		this.disciplinas = disciplinas;
	}
	
	

}
