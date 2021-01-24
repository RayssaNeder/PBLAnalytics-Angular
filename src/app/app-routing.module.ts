import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { CursosPesquisaComponent } from './curso/cursos-pesquisa/cursos-pesquisa.component';

const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  { path:  'cursos', component: CursosPesquisaComponent },
  { path:  'login', component: LoginFormComponent },
  { path:  'cursos/novo', component: CursoFormComponent },
  { path: 'disciplinas/novo', component: DisciplinaFormComponent },
  { path: 'disciplinas/:sku', component: DisciplinaFormComponent },
  { path: 'cursos/:sku', component: CursoFormComponent },
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
