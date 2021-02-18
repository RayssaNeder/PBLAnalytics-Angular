import { NgForm, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from './../../core/erro-handler.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from './../turma.service';
import { Component, OnInit } from '@angular/core';



class Turma{
  codigo: number;
  sku: string;
  dataInicio: Date;
  dataConclusao: Date;
}


@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent implements OnInit {

  turma: Turma = new Turma();


  constructor(
  private turmaService: TurmaService,
  private router: Router,
  private messageService: MessageService,
  private errorHandler: ErrorHandlerService,
  private title: Title,
  private route: ActivatedRoute
  ){}




  ngOnInit(){
    const codigoTurma = this.route.snapshot.params['sku'];

    this.title.setTitle('Nova truma');

    if (codigoTurma) {
      this.carregarCurso(codigoTurma);
    }

    // this.carregarCategorias();
    // this.carregarPessoas();
  }

  get editando() {
    return Boolean(this.turma.codigo)
  }

  carregarCurso(sku: string) {
    this.turmaService.buscarPorCodigo(sku)
      .then(turma => {
        this.turma = turma;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarCurso(form);
    } else {
      this.adicionarCurso(form);
    }
  }

  adicionarCurso(form: FormControl) {
    this.turmaService.adicionar(this.turma)
      .then(turmaAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Curso adicionado com sucesso!' });

        // form.reset();
        // this.lancamento = new Lancamento();
        this.router.navigate(['/turmas', turmaAdicionado.sku]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCurso(form: FormControl) {
    this.turmaService.atualizar(this.turma)
      .then(turma => {
        this.turma = turma;

        this.messageService.add({ severity: 'success', detail: 'Curso alterado com sucesso!' });
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de turma: ${this.turma.sku}`);
  }


}
