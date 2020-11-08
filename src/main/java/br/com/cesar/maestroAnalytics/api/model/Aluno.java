package br.com.cesar.maestroAnalytics.api.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "aluno")
public class Aluno extends Pessoa{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@NotNull
	private String matricula;
	private boolean ativo;
	@Enumerated(EnumType.STRING)
	private Bolsa bolsa;
	
	
	@JsonBackReference("alunos")
    @ManyToMany(cascade = CascadeType.DETACH, fetch = FetchType.LAZY)
	@JoinTable(name = "aluno_turma", joinColumns = @JoinColumn(name = "aluno_codigo"), inverseJoinColumns = @JoinColumn(name = "turma_codigo"))
	private List<Turma> turmaList = new ArrayList<>();
	
	
	public boolean isAtivo() {
		return ativo;
	}
	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}
	
	public String getMatricula() {
		return matricula;
	}
	public void setMatricula(String matrícula) {
		this.matricula = matrícula;
	}
	
	public Bolsa getBolsa() {
		return bolsa;
	}
	public void setBolsa(Bolsa bolsa) {
		this.bolsa = bolsa;
	}
	public List<Turma> getTurmaList() {
		return turmaList;
	}
	public void setTurmaList(List<Turma> turmaList) {
		this.turmaList = turmaList;
	}
	@JsonIgnore
	@Transient
	public boolean isInativo() {
		return !this.ativo;
	}	

}
