import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';

import { Title } from '@angular/platform-browser';
//import { ErrorHandlerService } from './../../core/error-handler.service';

@Component({
  selector: 'app-cursos-pesquisa',
  templateUrl: './cursos-pesquisa.component.html',
  styleUrls: ['./cursos-pesquisa.component.css']
})
export class CursosPesquisaComponent  implements OnInit{


  cursos = [];

  constructor(private cursoService: CursoService,
    private title: Title){

  }


  ngOnInit(){
    this.title.setTitle('Pesquisa de cursos');
  }

  consultar(){
    this.cursoService.consultar().then(cursos => this.cursos = cursos);
  }

  pesquisar(pagina = 0) {
    this.cursoService.consultar()
      .then(resultado => {

        this.cursos = resultado.cursos;
      })
      .catch(erro => console.log("erro"));
  }



}
