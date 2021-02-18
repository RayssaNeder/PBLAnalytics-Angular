import { ErrorHandlerService } from './../../core/erro-handler.service';
import { TurmaService, TurmaFiltro } from './../turma.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-turma-pesquisa',
  templateUrl: './turma-pesquisa.component.html',
  styleUrls: ['./turma-pesquisa.component.css']
})
export class TurmasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new TurmaFiltro();
  turmas = [];
  @ViewChild('tabela') grid: Table;

  constructor(
    private turmaService: TurmaService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de turmas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.turmaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.turmas = resultado.turmas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(turma: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(turma);
      }
    });
  }

  excluir(turma: any) {
    this.turmaService.excluir(turma.sku)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }

        this.messageService.add({ severity: 'success', detail: 'Turma excluído com sucesso!' });
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
