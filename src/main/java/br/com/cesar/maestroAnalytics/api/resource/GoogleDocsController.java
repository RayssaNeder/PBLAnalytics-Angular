package br.com.cesar.maestroAnalytics.api.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.cesar.maestroAnalytics.api.model.GoogleDocsModel;
import br.com.cesar.maestroAnalytics.api.service.GoogleDocsService;

@RestController
@RequestMapping("/docs")
public class GoogleDocsController {
	
	@Autowired
	private ApplicationEventPublisher publisher;
	
	@Autowired
	private GoogleDocsService googleDocsService;
	
	@GetMapping
	public List<GoogleDocsModel> listar(){
		return googleDocsService.findAll();
	}

}
