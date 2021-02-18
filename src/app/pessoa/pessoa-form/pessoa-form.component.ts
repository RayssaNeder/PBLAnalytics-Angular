import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from 'src/app/core/erro-handler.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from './../pessoa.service';

class Pessoa{
  codigo: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  sexo: string;
  ocupacao: string;
  }

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  sexos = [
    { label: 'Feminino', value: 'F'},
    { label:  'Masculino', value: 'M' }
  ];

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private route: ActivatedRoute
    ){}

    ngOnInit(){
      const codigoPessoa = this.route.snapshot.params['codigo'];

      this.title.setTitle('Novo pessoa');

      if (codigoPessoa) {
        this.carregarPessoa(codigoPessoa);
      }

      // this.carregarCategorias();
      // this.carregarPessoas();
    }

    get editando() {
      return Boolean(this.pessoa.codigo)
    }

    carregarPessoa(codigo: number) {
      this.pessoaService.buscarPorCodigo(codigo)
        .then(pessoa => {
          this.pessoa = pessoa;
          this.atualizarTituloEdicao();
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    salvar(form: FormControl) {
      if (this.editando) {
        this.atualizarPessoa(form);
      } else {
        this.adicionarPessoa(form);
      }
    }

    adicionarPessoa(form: FormControl) {
      this.pessoaService.adicionar(this.pessoa)
        .then(pessoaAdicionado => {
          this.messageService.add({ severity: 'success', detail: 'Pessoa adicionado com sucesso!' });

          // form.reset();
          // this.lancamento = new Lancamento();
          this.router.navigate(['/pessoas', pessoaAdicionado.codigo]);
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    atualizarPessoa(form: FormControl) {
      this.pessoaService.atualizar(this.pessoa)
        .then(pessoa => {
          this.pessoa = pessoa;

          this.messageService.add({ severity: 'success', detail: 'Pessoa alterado com sucesso!' });
          this.atualizarTituloEdicao();
        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    atualizarTituloEdicao() {
      this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`);
    }


  }
