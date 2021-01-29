import { CursoService } from './../../curso/curso.service';
import { ErrorHandlerService } from './../../core/erro-handler.service';
import { DisciplinaService, DisciplinaFiltro } from './../disciplina.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Curso } from 'src/app/curso/curso';
@Component({
  selector: 'app-disciplinas-pesquisa',
  templateUrl: './disciplinas-pesquisa.component.html',
  styleUrls: ['./disciplinas-pesquisa.component.css']
})
export class DisciplinasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new DisciplinaFiltro();
  disciplinas = [];
  cursos = [];
  selectedCursos: Curso[];
  @ViewChild('tabela') grid: Table;

  constructor(
    private disciplinaService: DisciplinaService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private cursoService: CursoService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de disciplinaa');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.disciplinaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.disciplinas = resultado.disciplinas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(disciplina: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(disciplina);
      }
    });
  }

  excluir(disciplina: any) {
    this.disciplinaService.excluir(disciplina.sku)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'disciplina excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }




}
