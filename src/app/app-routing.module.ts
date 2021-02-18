import { ProfessorFormComponent } from './professor/professor-form/professor-form.component';
import { ProfessoresPesquisaComponent } from './professor/professores-pesquisa/professores-pesquisa.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';
import { TurmasPesquisaComponent } from './turma/turma-pesquisa/turma-pesquisa.component';
import { PessoaFormComponent } from './pessoa/pessoa-form/pessoa-form.component';
import { PessoasPesquisaComponent } from './pessoa/pessoa-pesquisa/pessoa-pesquisa.component';
import { DisciplinasPesquisaComponent } from './disciplina/disciplinas-pesquisa/disciplinas-pesquisa.component';
import { HomeComponent } from './home/home/home.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { CursosPesquisaComponent } from './curso/cursos-pesquisa/cursos-pesquisa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:  'cursos', component: CursosPesquisaComponent },
  { path:  'login', component: LoginFormComponent },
  { path:  'cursos/novo', component: CursoFormComponent },
  { path:  'disciplinas', component: DisciplinasPesquisaComponent },
  { path: 'disciplinas/novo', component: DisciplinaFormComponent },
  { path: 'disciplinas/:sku', component: DisciplinaFormComponent },
  { path: 'cursos/:sku', component: CursoFormComponent },
  { path:  'pessoas', component: PessoasPesquisaComponent },
  { path:  'pessoas/nova', component: PessoaFormComponent },
  { path: 'pessoas/:codigo', component: PessoaFormComponent },
  { path:  'turmas', component: TurmasPesquisaComponent },
  { path: 'turmas/novo', component: TurmaFormComponent },
  { path: 'turmas/:sku', component: TurmaFormComponent },
  { path:  'professores', component: ProfessoresPesquisaComponent },
  { path: 'professores/novo', component: ProfessorFormComponent },
  { path: 'professor/cpf/:cpf', component: ProfessorFormComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
