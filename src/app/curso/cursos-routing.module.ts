import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'cursos', component: CursosPesquisaComponent },
  { path: 'cursos/novo', component: CursoFormComponent },
  { path: 'cursos/:codigo', component: CursoFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
