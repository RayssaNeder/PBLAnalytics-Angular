import { TurmasPesquisaComponent } from './turma-pesquisa/turma-pesquisa.component';


import { TurmaFormComponent } from './turma-form/turma-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../seguranca/auth.guard';



const routes: Routes = [
  { path: 'turmas',
  component: TurmasPesquisaComponent,
  canActivate: [AuthGuard]
},
{ path: 'turmas/nova',
component: TurmaFormComponent,
canActivate: [AuthGuard]
},

{ path: 'turmas/:codigo',
component: TurmaFormComponent,
canActivate: [AuthGuard]
}
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TurmasRoutingModule{}


