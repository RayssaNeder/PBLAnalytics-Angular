package br.com.cesar.maestroAnalytics.api.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cesar.maestroAnalytics.api.event.ResourceCreatedEvent;
import br.com.cesar.maestroAnalytics.api.model.Aluno;
import br.com.cesar.maestroAnalytics.api.repository.AlunoRepository;


@RestController
@RequestMapping("/alunos")
public class AlunoController {
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@Autowired
	private AlunoRepository alunosRepository;
	
	@GetMapping
	public List<Aluno> listar(){
		return alunosRepository.findAll();
	}
	
	
	  @PostMapping 
	  public ResponseEntity<Aluno> criar(@Valid @RequestBody Aluno aluno, HttpServletResponse response){ 
		  Aluno alunoSalvo =   alunosRepository.save(aluno);
	  
	  publisher.publishEvent(new ResourceCreatedEvent(this, response,
	   alunoSalvo.getCodigo()));
	  
	  return ResponseEntity.status(HttpStatus.CREATED).body(alunoSalvo); }
	 

}
