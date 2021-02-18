import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorService } from './../professor.service';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { Pessoa, Professor } from './../../core/model';
import { PessoaService } from './../../pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/erro-handler.service';


@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {

  cpf: string;
  pessoa: Pessoa = new Pessoa();
  professor: Professor = new Professor();

  constructor(
    private pessoaService: PessoaService,
    private professorService: ProfessorService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router,
  )
  { }

  ngOnInit(): void {
    const codigoProfessor = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo professor');

    if (codigoProfessor) {
      this.carregarProfessor(codigoProfessor);
    }
  }

  carregarProfessor(codigo: number) {
    this.professorService.buscarPorCodigo(codigo)
      .then(professor => {
        this.professor = professor;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
    }

  get editando() {
    return Boolean(this.professor.codigo)
  }

  buscaPessoa(cpf: String){
    this.pessoaService.buscarPorCpf(cpf).
    then(pessoa => {
      this.professor.pessoa = pessoa;
    }) .catch(erro => this.errorHandler.handle(erro));;
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarProfessor(form);
    } else {
      this.atualizarProfessor(form);
    }
  }

  atualizarProfessor(form: FormControl) {
    this.professorService.atualizar(this.professor)
      .then(professor => {
        this.professor = professor;

        this.messageService.add({ severity: 'success', detail: 'Professor alterado com sucesso!' });
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de professor: ${this.professor.pessoa.nome}`);
  }


}
