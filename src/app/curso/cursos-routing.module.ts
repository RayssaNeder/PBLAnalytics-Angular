import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';
import { AuthGuard } from './../seguranca/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'cursos',
    component: CursosPesquisaComponent,
    canActivate: [AuthGuard]
  },

  { path: 'cursos/novo',
    component: CursoFormComponent,
    canActivate: [AuthGuard]
  },

  { path: 'cursos/:codigo',
    component: CursoFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
