import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DisciplinaService } from './../disciplina.service';
import { ErrorHandlerService } from 'src/app/core/erro-handler.service';
import { CursoService } from './../../curso/curso.service';
import { NgForm, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';


class Disciplina{
  codigo: number;
  sku: string;
  nome: string;
  curso: Curso = new Curso();
}


@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent implements OnInit{

  disciplina: Disciplina = new Disciplina();
  cursos = [];


 constructor(
  private errorHandler: ErrorHandlerService,
  private cursoService: CursoService,
  private router: Router,
  private disciplinaService: DisciplinaService,
  private route: ActivatedRoute,
  private messageService: MessageService,
  private title: Title,
 ){}

  ngOnInit(){
    const codigoDisciplina = this.route.snapshot.params['sku'];
    this.carregarCursos();

    if (codigoDisciplina) {
      this.carregarDisciplina(codigoDisciplina);
    }
  }

  carregarDisciplina(sku: string) {
    this.disciplinaService.buscarPorCodigo(sku)
      .then(disciplina => {
        this.disciplina = disciplina;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de curso: ${this.disciplina.nome}`);
  }

  salvar(form: FormControl){
    if (this.editando) {
      this.atualizarDisciplina(form);
    } else {
      this.adicionarDisciplina(form);
    }
  }

  adicionarDisciplina(form: FormControl) {
    this.disciplinaService.adicionar(this.disciplina)
      .then(disciplionaAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Curso adicionado com sucesso!' });

        // form.reset();
        // this.lancamento = new Lancamento();
        this.router.navigate(['/disciplinas', disciplionaAdicionada.sku]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarDisciplina(form: FormControl) {
    this.disciplinaService.atualizar(this.disciplina)
      .then(disciplina => {
        this.disciplina = disciplina;

        this.messageService.add({ severity: 'success', detail: 'Disciplina alterada com sucesso!' });
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.disciplina.codigo)
  }


  carregarCursos() {
    this.cursoService.listarTodos()
      .then(cursos => {
        this.cursos = cursos
          .map(p => ({ nome: p.nome, sku: p.sku }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
