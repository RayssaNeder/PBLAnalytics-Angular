import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-pesquisa',
  templateUrl: './cursos-pesquisa.component.html',
  styleUrls: ['./cursos-pesquisa.component.css']
})
export class CursosPesquisaComponent  implements OnInit{

  title = 'pblAnalytics-ui';
  cursos = [];

  constructor(private cursoService: CursoService){
  }


  ngOnInit(){
    this.consultar();
  }

  consultar(){
    this.cursoService.consultar().then(cursos => this.cursos = cursos);
  }



}
