import { AuthGuard } from './../seguranca/auth.guard';

import { CursoFormComponent } from './curso-form/curso-form.component';
import { Routes, RouterModule } from '@angular/router';
import { CursosPesquisaComponent } from './cursos-pesquisa/cursos-pesquisa.component';
import { NgModule } from '@angular/core';



const cursosRoutes: Routes = [
  {
    path: '',
    component: CursosPesquisaComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [
        'uma_authorization'
      ]
    }
  },


  { path:  'novo', component: CursoFormComponent, canActivate: [AuthGuard] },
  { path: 'visualizar/:sku', component: CursoFormComponent, canActivate: [AuthGuard] },
];
  @NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
  })
  export class CursosRoutingModule{}

]
