
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/erro-handler.service';
import { Grau, Modalidade } from 'src/app/core/model';


class Curso{
codigo: number;
sku: string;
nome: string;
modalidade: Modalidade;
grau: Grau;
}

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit{

  curso: Curso = new Curso();
  modalidades = [
    { label: 'Presencial', value: 'P'},
    { label:  'à distânica', value: 'D' }
  ];

  graus = [
    {label: 'Bacharelado', value: 'B'},
    {label: 'Licenciatura', value: 'L'}
  ];

  constructor(
  private cursoService: CursoService,
  private router: Router,
  private messageService: MessageService,
  private errorHandler: ErrorHandlerService,
  private title: Title,
  private route: ActivatedRoute
  ){}




  ngOnInit(){
    const codigoCurso = this.route.snapshot.params['sku'];

    this.title.setTitle('Novo curso');

    if (codigoCurso) {
      this.carregarCurso(codigoCurso);
    }

    // this.carregarCategorias();
    // this.carregarPessoas();
  }

  get editando() {
    return Boolean(this.curso.codigo)
  }

  carregarCurso(sku: string) {
    this.cursoService.buscarPorCodigo(sku)
      .then(curso => {
        this.curso = curso;
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
    this.cursoService.adicionar(this.curso)
      .then(cursoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Curso adicionado com sucesso!' });

        // form.reset();
        // this.lancamento = new Lancamento();
        this.router.navigate(['/cursos', cursoAdicionado.sku]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarCurso(form: FormControl) {
    this.cursoService.atualizar(this.curso)
      .then(curso => {
        this.curso = curso;

        this.messageService.add({ severity: 'success', detail: 'Curso alterado com sucesso!' });
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de curso: ${this.curso.nome}`);
  }


}
