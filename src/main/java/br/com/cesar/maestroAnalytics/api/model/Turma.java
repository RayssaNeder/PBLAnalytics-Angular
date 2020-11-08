package br.com.cesar.maestroAnalytics.api.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "turma")
public class Turma implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
		
	//@NotNull
	//@Size(min = 3, max = 50)
	private String nome;
	
	 @ManyToOne
	 @NotNull
	 @JoinColumn(name = "codigo_curso", nullable = false) 
	 private Curso curso;	
	
	 @JsonBackReference("turmaList")
     @ManyToMany(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
	 @JoinTable(name = "aluno_turma", joinColumns = @JoinColumn(name = "aluno_codigo"), inverseJoinColumns = @JoinColumn(name = "turma_codigo"))
	private List<Aluno> alunos = new ArrayList<>();


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

	
	  public Curso getCurso() { return curso; }
	  
	  
	  public void setCurso(Curso curso) { this.curso = curso; }
	 


	public List<Aluno> getAlunos() {
		return alunos;
	}


	public void setAlunos(List<Aluno> alunos) {
		this.alunos = alunos;
	}
	 
	 
	 
	 
	 
}





