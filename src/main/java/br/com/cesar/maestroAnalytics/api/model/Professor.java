package br.com.cesar.maestroAnalytics.api.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "professor")
public class Professor extends Pessoa{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@ManyToMany
	@JoinTable(name = "professor_disciplina", joinColumns = @JoinColumn(name = "professor_codigo"), inverseJoinColumns = @JoinColumn(name = "disciplina_codigo"))
	private List<Turma> disciplinas = new ArrayList<>();
	
	public List<Turma> getDisciplinas() {
		return disciplinas;
	}

	public void setDisciplinas(List<Turma> disciplinas) {
		this.disciplinas = disciplinas;
	}
	
	
	
	

}
