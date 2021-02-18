import { AuthGuard } from './../seguranca/auth.guard';

import { CursoFormComponent } from './curso-form/curso-form.component';
import { Routes, RouterModule } from '@angular/router';
import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';
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

{ path: 'cursos/:sku',
component: CursoFormComponent,
canActivate: [AuthGuard]
}
];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CursosRoutingModule{}


