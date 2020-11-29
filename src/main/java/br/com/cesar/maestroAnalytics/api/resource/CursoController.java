package br.com.cesar.maestroAnalytics.api.resource;

import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cesar.maestroAnalytics.api.event.ResourceCreatedEvent;
import br.com.cesar.maestroAnalytics.api.model.Aluno;
import br.com.cesar.maestroAnalytics.api.model.Curso;
import br.com.cesar.maestroAnalytics.api.repository.AlunoRepository;
import br.com.cesar.maestroAnalytics.api.repository.CursoRepository;
import br.com.cesar.maestroAnalytics.api.service.AlunoService;
import br.com.cesar.maestroAnalytics.api.service.CursoService;

@RestController
@RequestMapping("/cursos")
public class CursoController {
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@Autowired
	private CursoService cursoService;
	
	@Autowired
	private CursoRepository cursoRepository;
	
	//@CrossOrigin(maxAge = 10, origins = {"http://localhost:8000"}) -- não vou adicionar a origem cruzada via anotação porque o spring não funciona bem com o oauth2. Em vez disso vou criar um filtro para o CORS
	@GetMapping
	public List<Curso> listar(){
		return cursoRepository.findAll();
	}
	
	
	  @PostMapping 
	  public ResponseEntity<Curso> criar(@Valid @RequestBody Curso curso, HttpServletResponse response){ 
		  Curso cursoSalvo =   cursoService.save(curso);
	  
	  publisher.publishEvent(new ResourceCreatedEvent(this, response,
			  cursoSalvo.getCodigo()));
	  
	  return ResponseEntity.status(HttpStatus.CREATED).body(cursoSalvo); }
	 

}
