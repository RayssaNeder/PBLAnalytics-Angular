package br.com.cesar.maestroAnalytics.api.model;

import java.io.Serializable;
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
public class Curso implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;

	
	//@NotNull
	@Size(min = 3, max = 20)
	private String nome;
	
	@ManyToMany
	@JoinTable(name = "curso_disciplina", joinColumns = @JoinColumn(name = "curso_codigo"), inverseJoinColumns = @JoinColumn(name = "disciplina_codigo"))
	private List<Turma> disciplinas = new ArrayList<>();
	
	 @OneToMany(mappedBy = "curso")
	 private List<Turma> turmaList = new ArrayList<>();

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

	public List<Turma> getTurmaList() {
		return turmaList;
	}

	public void setTurmaList(List<Turma> turmaList) {
		this.turmaList = turmaList;
	}

	

	

	
	 
	 
	
	

}
