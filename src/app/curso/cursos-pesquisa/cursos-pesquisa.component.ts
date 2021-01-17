import { ErrorHandlerService } from './../../core/erro-handler.service';
import { CursoService, CursoFiltro } from './../curso.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-cursos-pesquisa',
  templateUrl: './cursos-pesquisa.component.html',
  styleUrls: ['./cursos-pesquisa.component.css']
})
export class CursosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new CursoFiltro();
  cursos = [];
  @ViewChild('tabela') grid: Table;

  constructor(
    private cursoService: CursoService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de cursoa');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.cursoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.cursos = resultado.cursos;
        console.log('olhaaaaaaaaa ' +  this.cursos)
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(curso: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(curso);
      }
    });
  }

  excluir(curso: any) {
    this.cursoService.excluir(curso.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Curso excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
